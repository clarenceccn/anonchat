package org.devteam1.util;

import org.devteam1.db.RedisClient;

import java.util.HashMap;
import java.util.Map;

public class ShortLinkGenerator {

    private final RedisClient redisClient; //mapping is -> shortUrl_<chatroomId> : shortUrlLink
    private final Map<String, String> chatRoomToShortUrl;
    private final Map<String, String> shortUrlToChatRoom;
    private static final String SHORT_URL_PREFIX = "shortUrl_";

    private String mostRecentChatroom = null;

    public ShortLinkGenerator(final RedisClient redisClient) {
        this.redisClient = redisClient;
        chatRoomToShortUrl = new HashMap<>();
        shortUrlToChatRoom = new HashMap<>();
    }

    public String createUrl(final String chatroomId) {
        // 1. if chatroomId exists in mapping, then return existing mapping
        if (chatRoomToShortUrl.containsKey(chatroomId)) {
            return chatRoomToShortUrl.get(chatroomId);
        }

        final int mostRecentIdx = getMostRecentAddedIdx();
        final String urlMapping = String.valueOf(mostRecentIdx + 1);
        chatRoomToShortUrl.put(chatroomId, urlMapping);
        shortUrlToChatRoom.put(urlMapping, chatroomId);
        mostRecentChatroom = chatroomId;
        return urlMapping;
    }

    public void removeLinks(final String chatroomId) {
        if (chatRoomToShortUrl.containsKey(chatroomId)) {
            final String shortUrl = chatRoomToShortUrl.get(chatroomId);
            shortUrlToChatRoom.remove(shortUrl);
        }
        chatRoomToShortUrl.remove(chatroomId);
    }

    private int getMostRecentAddedIdx() {
        if (mostRecentChatroom == null) {
            return 0;
        }
        return Integer.parseInt(chatRoomToShortUrl.get(mostRecentChatroom));
    }

}
