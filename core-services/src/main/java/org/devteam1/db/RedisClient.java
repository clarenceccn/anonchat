package org.devteam1.db;

/* This is where the logic for storing and retrieving chat messages will be */


import com.google.gson.Gson;
import redis.clients.jedis.Jedis;
import org.devteam1.chatroom.Chat.ChatMessage;

import java.util.ArrayList;
import java.util.List;

/**
 * APIs
 * - saveMessage()
 * - getMessageHistory()
 */
public class RedisClient {
    private Jedis jedis;
    private Gson gson;

    /**
     * These values are from deploy/grpc-service-deployment.yaml
     */
    private static final String REDIS_URL = System.getenv("REDIS_HOST");
    private static final int REDIS_PORT = Integer.parseInt(System.getenv("REDIS_PORT"));

    public RedisClient() {
        System.out.println("Trying to connect to Redis on " + REDIS_URL + ":" + REDIS_PORT);
        this.jedis = new Jedis(REDIS_URL, REDIS_PORT);
        this.gson = new Gson();
        System.out.println("Successfully connected to Redis on " + REDIS_URL + ":" + REDIS_PORT);
    }

    public void saveMessage(final ChatMessage message) {
        final String serializedChatMessage = gson.toJson(message);
        final String key = message.getChatRoomId();
        jedis.rpush(key, serializedChatMessage);
    }

    public List<ChatMessage> getChatMessages(final String chatroomId) {
        final List<String> messages = getMessages(chatroomId);
        final List<ChatMessage> result = new ArrayList<>();
        for (String serializedMessage : messages) {
            ChatMessage msg = gson.fromJson(serializedMessage, ChatMessage.class);
            System.out.println("de-serialized msg= " + msg);
            result.add(msg);
        }
        return result;
    }

    private List<String> getMessages(final String chatroomId) {
        return jedis.lrange(chatroomId, 0, -1);
    }

    public void close() {
        jedis.close();
    }
}
