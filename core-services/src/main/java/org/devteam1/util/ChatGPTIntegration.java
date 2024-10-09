package org.devteam1.util;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class ChatGPTIntegration {

    private static final String API_KEY = "your-openai-api-key";  // Replace with your actual API key
    private static final String API_URL = "https://api.openai.com/v1/completions";

    // Method to send chatroom messages to ChatGPT for transcription/summarization
    public static String getChatSummary(List<String> chatMessages) throws IOException {
        OkHttpClient client = new OkHttpClient();

        // Convert the chat messages into a single string that ChatGPT will summarize
        StringBuilder conversation = new StringBuilder();
        for (String message : chatMessages) {
            conversation.append(message).append("\n");
        }

        // Prepare JSON request body for OpenAI
        JSONObject json = new JSONObject();
        json.put("model", "text-davinci-002");
        json.put("prompt", "Summarize the following chatroom discussion:\n" + conversation.toString());
        json.put("max_tokens", 150);  // You can adjust this value depending on the summary length you want

        RequestBody body = RequestBody.create(json.toString(), MediaType.get("application/json"));

        // Create the API request
        Request request = new Request.Builder()
                .url(API_URL)
                .header("Authorization", "Bearer " + API_KEY)
                .post(body)
                .build();

        // Execute the API request and get the response
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                String responseBody = response.body().string();
                JSONObject responseJson = new JSONObject(responseBody);
                return responseJson.getJSONArray("choices").getJSONObject(0).getString("text");
            } else {
                throw new IOException("Unexpected code " + response);
            }
        }
    }
}
