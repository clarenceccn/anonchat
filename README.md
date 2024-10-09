**Tech stack**
- gRPC
- Redis
- Envoy
- React
- Docker
- Kubernetes
- GCR (google cloud registry)

***Getting started for frontend with Docker/Kubernetes***

1) Install docker-desktop and enable kubernetes
2) Build docker image 
```
cd ./grpc-chat-frontend
docker build -t grpc-web-app-frontend:v1.0.0 .
```
2) Run the commands below in the grpc-chat-frontend/deploy directory
```
kubectl create namespace frontend
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```
3) Access frontend with URL
```
http://localhost:30080
```

4) To make updates to the frontend and see the changes, run commands below

To build
```
docker build -t grpc-web-app-frontend:v1.0.0 .
```

To load new changes
```
kubectl rollout restart deployment -n frontend grpc-web-app-frontend-deployment
```
***Getting started with kubernetes for backend***
0) Build docker image 
```
./gradlew build
docker build -t grpc-core-service-image:v1.0.0 .
```

1) Install docker desktop and enable kubernetes in settings then navigate to *./core-services/deploy/* and run commands below
```
kubectl create namespace infrastructure
kubectl apply -f envoy-config.yaml
kubectl apply -f envoy-deployment.yaml
kubectl apply -f grpc-backend-deployment.yaml
kubectl apply -f redis-deployment.yaml
```

1) To make code changes and see them, rebuild then update the image and restart kubernetes core-service deployment
```
./gradlew build
docker build -t grpc-core-service-image:v1.0.0 .
kubectl rollout restart deployment -n infrastructure grpc-core-service
```

**(Skip this and use the docker/kubernetes version) Getting started for frontend**

1) Compiling new protobuf changes
```
protoc -I=proto/ proto/chat.proto \
  --js_out=import_style=commonjs,binary:./src/proto \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/proto
  ```

2) Compiling frontend changes

```npm run build```

3) Running local frontend server

```serve -s build```

**(skip this step, go to the kubernetes step) Getting started for backend**

1) Build with command below

   ```./gradlew build ```


2) Running local redis instance
Install and open docker then run command below

    ```docker run --name redis-server -d -p 6379:6379 redis:latest```


3) Running local grpc server
This step requires a running redis instance at port 6379

    ```./gradlew run```

4) Testing grpc server calls

```
grpcurl -plaintext localhost:50051 org.devteam1.chatroom.ChatRoom/receiveMessages
```

***(skip this step, go to the kubernetes step) Getting started for proxy server***

This is required for Http/1.1 requests from react to have contact with Http/2 grpc backend

1) Installing with docker

   ```docker pull envoyproxy/envoy:v1.21.0```

2) Running envoy

   Run command below within the backend dir

```
 docker run -d -p 8080:8080 -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml envoyproxy/envoy:v1.21.0
 ```


***(skip this step, do kubernetes one) Getting started with docker for backend***
1) Build the image

   ``` docker build -t grpc-core-services-image:v1.0.0 . ```
2) Run the docker image locally

   ``` docker run -d -p 50051:50051 --name grpc-backend-container grpc-backend ```
