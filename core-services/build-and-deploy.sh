#!/bin/bash

./gradlew build

docker build -t grpc-core-service-image:v1.0.0 .

kubectl rollout restart deployment -n infrastructure grpc-core-service
