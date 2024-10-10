package org.devteam1.db;

/* This is where the logic for storing and retrieving chat messages will be */


import redis.clients.jedis.Jedis;
import java.util.List;

/**
 * APIs
 * - saveMessage()
 * - getMessageHistory()
 */
public class RedisClient {
    private Jedis jedis;

    /**
     * These values are from deploy/grpc-service-deployment.yaml
     */
    private static final String REDIS_URL = System.getenv("REDIS_HOST");
    private static final int REDIS_PORT = Integer.parseInt(System.getenv("REDIS_PORT"));
    private static final String SET_SUFFIX = "_set";

    public RedisClient() {
        System.out.println("Trying to connect to Redis on " + REDIS_URL + ":" + REDIS_PORT);
        this.jedis = new Jedis(REDIS_URL, REDIS_PORT);
        System.out.println("Successfully connected to Redis on " + REDIS_URL + ":" + REDIS_PORT);
    }

    public void push(final String key, final String value) {
        if (key == null || value == null) {
            System.out.println("key or value should not be null");
            return;
        }
        jedis.rpush(key, value);
        jedis.sadd(key + SET_SUFFIX, value);
    }

    public String getValue(final String key) {
        return jedis.lindex(key, -1);
    }

    public List<String> listValues(final String key) {
        return jedis.lrange(key, 0, -1);
    }

    public boolean exists(final String key, final String value) {
        return jedis.sismember(key + SET_SUFFIX, value);
    }

    public void removeValue(final String key, final  String value) {
        jedis.lrem(key, 0, value);
        jedis.srem(key + SET_SUFFIX, value);
    }

    public void close() {
        jedis.close();
    }
}
