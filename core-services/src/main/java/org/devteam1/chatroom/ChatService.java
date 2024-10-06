package org.devteam1.chatroom;

import io.grpc.stub.ServerCallStreamObserver;
import io.grpc.stub.StreamObserver;
import org.devteam1.chatroom.Chat.ChatMessage;
import org.devteam1.chatroom.Chat.ChatMessageRequest;
import org.devteam1.chatroom.Chat.ChatRoomRequest;
import org.devteam1.chatroom.Chat.StringMessage;
import org.devteam1.chatroom.Chat.Chatroom;
import org.devteam1.db.RedisClient;
import org.devteam1.util.ShortLinkGenerator;

import java.util.*;

/**
 * This is where the main business logic for the chatroom is implemented
 * - send chat
 * - receive chat
 * - store chat in Redis
 * <p>
 * APIs
 * - joinChat()
 */
public class ChatService extends ChatRoomGrpc.ChatRoomImplBase {

    private RedisClient redisClient;
    private final Map<String, Set<ServerCallStreamObserver<ChatMessage>>> subscriptions;
    private final ShortLinkGenerator shortlinkGenerator;

    private final ChatRoomManager chatroomManager;

    public ChatService() {
        redisClient = new RedisClient();
        subscriptions = new HashMap<>();
        shortlinkGenerator = new ShortLinkGenerator(redisClient);
        chatroomManager = new ChatRoomManager(redisClient, shortlinkGenerator);
    }

    @Override
    public void createChatRoom(final ChatRoomRequest request,
                               final StreamObserver<Chatroom> responseObserver) {
        final Chatroom chatroom = chatroomManager.createChatroom(request.getUsername());
        responseObserver.onNext(chatroom);
    }

    @Override
    public void subscribeToMessages(final ChatMessageRequest request,
                                    final StreamObserver<ChatMessage> responseObserver) {
        final String chatroomId = request.getChatroomId();
        loadExistingMessages(chatroomId, responseObserver);
        subscribe(chatroomId, responseObserver);
        System.out.println("This should not happen");
    }

    private void loadExistingMessages(final String chatroomId, final StreamObserver<ChatMessage> stream) {
        List<ChatMessage> messages = chatroomManager.getChatMessages(chatroomId);
        for (final ChatMessage message : messages) {
            stream.onNext(message);
        }
    }

    private void subscribe(final String chatroomId, StreamObserver<ChatMessage> stream) {
        final ServerCallStreamObserver<ChatMessage> sse = (ServerCallStreamObserver<ChatMessage>) stream;
        sse.setOnCancelHandler(() -> System.out.println("Client has cancelled the connection"));
        subscriptions.computeIfAbsent(chatroomId, s -> new HashSet<>()).add(sse);

        try {
            while (!sse.isCancelled()) {
                // Simulate work - your asynchronous task
                System.out.println("Running forever...");

                // Add some delay
                Thread.sleep(10000); // Sleep for 5 seconds
            }
            System.out.println("SSE is cancelled");
        } catch (InterruptedException e) {
            System.out.println("Interrupted exception");
        }
    }


    @Override
    public void sendMessage(final ChatMessage message, final StreamObserver<StringMessage> responseObserver) {
        System.out.println("sendMessage: " + message);
        chatroomManager.saveMessage(message);
        fanOutMessages(message.getChatRoomId(), message);
        responseObserver.onNext(success());
        responseObserver.onCompleted();
    }

    public void fanOutMessages(final String chatRoomId, final ChatMessage message) {
        if (subscriptions.containsKey(chatRoomId)) {
            for (ServerCallStreamObserver<ChatMessage> stream : subscriptions.get(message.getChatRoomId())) {
                stream.onNext(message);
            }
        }
    }

    public StringMessage success() {
        return StringMessage.newBuilder()
                .setValue("Msg received")
                .build();
    }

//    @Override
//    public StreamObserver<ChatMessage> joinChat(StreamObserver<ChatMessage> responseObserver) {
//        return new StreamObserver<ChatMessage>() {
//            @Override
//            public void onNext(ChatMessage chatMessage) {
//                redisClient.saveMessage(chatMessage);
//                responseObserver.onNext(chatMessage);
//            }
//
//            @Override
//            public void onError(Throwable throwable) {
//                System.err.println("Error has occurred during chat : " + throwable.getMessage());
//            }
//
//            @Override
//            public void onCompleted() {
//                System.out.println("Successfully sent message");
//                responseObserver.onCompleted();
//            }
//        };
//    }


//    @Override
//    public StreamObserver<ChatMessage> sendMessages(final StreamObserver<ChatMessage> responseObserver) {
//        return new StreamObserver<ChatMessage>() {
//            @Override
//            public void onNext(ChatMessage chatMessage) {
//                System.out.println("I am send message(s)");
//                responseObserver.onNext(chatMessage);
//            }
//
//            @Override
//            public void onError(Throwable throwable) {
//                System.err.println("Error occurred during send messages");
//                responseObserver.onError(throwable);
//            }
//
//            @Override
//            public void onCompleted() {
//                System.out.println("Successfully sent messages");
//                responseObserver.onCompleted();
//            }
//        };
//    }

}
