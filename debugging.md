envoy 503 error
- https://stackoverflow.com/questions/70409706/envoy-proxy-503-service-unavailable
- address is host.docker.internal when using docker

POST http://localhost:8080/org.devteam1.chatroom.ChatRoom/subscribeToMessages net::ERR_INCOMPLETE_CHUNKED_ENCODING 200 (OK)
- envoy was closing my connection to my SSE
- fix was to set timeout to 0s (to live forever)


envoy 503 no healthy upstream
- envoy was unable to hit my grpc container within docker. I tried updating to grpc-container for address but no success. I also tried to set it to host.docker.internal no success
- Solution was to find the network IP within docker network list and set the grpc-container IP address in envoy which was 172.17.0.3