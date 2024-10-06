package org.devteam1.chatroom;

import com.google.gson.Gson;
import org.devteam1.chatroom.Chat.ChatMessage;
import org.devteam1.chatroom.Chat.Chatroom;
import org.devteam1.db.RedisClient;
import org.devteam1.util.ShortLinkGenerator;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class ChatRoomManager {

    private final RedisClient redisClient;
    private static final String ACTIVE_CHATROOMS = "activeChatRooms";
    public static final int DEFAULT_TTL = 1; //DAYS

    private final Gson gson;

    private final ShortLinkGenerator shortLinkGenerator;

    public ChatRoomManager(final RedisClient redisClient, final ShortLinkGenerator shortLinkGenerator) {
        this.redisClient = redisClient;
        this.gson = new Gson();
        this.shortLinkGenerator = shortLinkGenerator;
    }

    public List<String> getActiveChatRooms() {
        return redisClient.listValues(ACTIVE_CHATROOMS);
    }

    public String getNewestChatroom() {
        return redisClient.getValue(ACTIVE_CHATROOMS);
    }

    public boolean isActive(final String chatroomId) {
        return redisClient.exists(ACTIVE_CHATROOMS, chatroomId);
    }

    public void setChatroomActive(final String chatroomId) {
        redisClient.push(ACTIVE_CHATROOMS, chatroomId);
    }

    public void setChatroomInactive(final String chatroomId) {
        redisClient.removeValue(ACTIVE_CHATROOMS, chatroomId);
    }

    public void saveMessage(final ChatMessage message) {
        final String serializedChatMessage = gson.toJson(message);
        final String key = message.getChatRoomId();
        redisClient.push(key, serializedChatMessage);
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
        return redisClient.listValues(chatroomId);
    }

    //TODO
    public void cleanUpExpiredChatRooms() {
        //1. get current date time
        //2. go through each chatroom and check ttl
        //3. if ttl is before current date time then delete/remove chatroom
    }

    public Chatroom createChatroom(final String username) {
        final String chatroomId = UUID.randomUUID().toString();
        final Instant createdOn = Instant.now();
        final Instant ttl = createdOn.plus(DEFAULT_TTL, ChronoUnit.DAYS);
        final Chatroom room = Chatroom.newBuilder()
                .setTtl(ttl.toString())
                .setCreatedOn(createdOn.toString())
                .setChatRoomId(chatroomId)
                .setUsername(username)
                .setUrl(shortLinkGenerator.createUrl(chatroomId))
                .setIsOwner(true)
                .build();
        setChatroomActive(chatroomId);
        return room;
    }

}
