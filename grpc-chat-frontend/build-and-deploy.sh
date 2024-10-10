#!/bin/bash

docker build -t grpc-web-app-frontend:v1.0.0 .

kubectl rollout restart deployment -n frontend grpc-web-app-frontend-deployment
