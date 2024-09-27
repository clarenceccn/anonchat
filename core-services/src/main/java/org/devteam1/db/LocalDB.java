package org.devteam1.db;

import com.google.common.collect.ImmutableList;
import org.devteam1.chatroom.Chat.ChatMessage;
import org.devteam1.chatroom.Chat.ChatMessageRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LocalDB {
    private final Map<List<String>, List<ChatMessage>> fakeDB;
    private final List<ChatMessage> messages;

    public LocalDB() {
        fakeDB = new HashMap<>();
        messages = new ArrayList<>();
    }

    public void storeMessageLocally(final ChatMessage message) {
//        System.out.println("Storing message locally: " + message);
        final String chatroomId = message.getChatRoomId();
        final String username = message.getUsername();
        final List<String> key = ImmutableList.of(chatroomId, username);
        fakeDB.computeIfAbsent(key, l -> new ArrayList<>()).add(message);
        messages.add(message);
    }

    public List<ChatMessage> getMessagesWithKey(final ChatMessageRequest req) {
//        System.out.println("Getting local messages with req= [" + req + "]");
        final String chatroomId = req.getChatroomId();
        final String sender = req.getUsername();
        final List<String> key = ImmutableList.of(chatroomId, sender);
        List<ChatMessage> results = fakeDB.getOrDefault(key, ImmutableList.of());
        return results;
    }
}
