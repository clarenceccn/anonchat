package org.devteam1;

import org.devteam1.chatroom.ChatServer;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        System.out.println("Hello world!");
        final ChatServer chatServer = new ChatServer();
        chatServer.start();
        chatServer.blockUntilShutdown();
    }
}