package org.devteam1.chatroom;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.protobuf.services.ProtoReflectionService;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

/*
 * This class handles
 * - starting the chat server
 * - binding to port
 * - managing server lifecycle (start, stop, resume, etc)
 *
 * methods
 * start()
 * stop()
 * blockUntilShutdown()
 */
public class ChatServer {
    private Server server;

    public void start() throws IOException {
        int port = Integer.parseInt(System.getenv("SERVER_PORT"));
        server = ServerBuilder.forPort(port)
                .keepAliveTime(30, TimeUnit.SECONDS)
                .keepAliveTimeout(10, TimeUnit.SECONDS)
                .permitKeepAliveWithoutCalls(true)
                .addService(new ChatService())
                .addService(ProtoReflectionService.newInstance())
                .build()
                .start();
        System.out.println("Server started, listening on " + port);

        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            System.out.println("*** shutting down gRPC server since JVM is shutting down");
            ChatServer.this.stop();
            System.out.println("*** server shut down");
        }));
    }

    public void stop()  {
        if (server != null) {
            server.shutdown();
        }
    }

    public void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }

}
