# For development with hot reload/fast refresh
1. npm install
2. npm start

# For use with actual database backend testing purposes
## Building steps
docker build -t grpc-web-app-frontend:v1.0.0 .

## View webapp
Navigate to localhost:30080

## build and deployment

Build command for m1 macbook pro
```
docker build -t devteam1spec/anonchat:dev-v1.0.0 .
```


Build command below for linux/gcp 
```
docker buildx build --platform linux/amd64 -t devteam1spec/anonchat:dev-v1.0.0 .
```

Command below to push to docker hub
```
docker push devteam1spec/anonchat:dev-v1.0.0
```

## local testing

1. run command below
```
PORT=80 && docker run -p 9090:${PORT} -e PORT=${PORT} docker.io/devteam1spec/anonchat:dev-v1.0.0 
```
2. open in browser
```
localhost:9090
```

