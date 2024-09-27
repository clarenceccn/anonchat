package org.devteam1.subscription;

import io.grpc.stub.ServerCallStreamObserver;
import io.grpc.stub.StreamObserver;
import org.devteam1.chatroom.Chat.ChatMessage;

import java.util.List;
import java.util.Set;

public class ChatSubscription {
    private String userId;
    private ServerCallStreamObserver<ChatMessage> stream;
    private Set<String> chatrooms;

    public ChatSubscription(String userId, ServerCallStreamObserver<ChatMessage> stream) {
        this.userId = userId;
        this.stream = stream;
    }
}
