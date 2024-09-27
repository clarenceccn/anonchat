plugins {
    id("java")
    id("com.google.protobuf") version "0.9.4"
    id("application")
    id("com.github.johnrengelman.shadow") version "7.1.0" // Shadow plugin
}

application {
    mainClass.set("org.devteam1.Main") // Set the main class for your application
}

tasks.jar {
    manifest {
        attributes["Main-Class"] = application.mainClass // Set main class in the jar
    }
}

tasks.shadowJar {
    manifest {
        attributes["Main-Class"] = application.mainClass // Set main class in shadow jar
    }
}

group = "org.devteam1"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

dependencies {
    // gRPC dependencies
    implementation("io.grpc:grpc-netty:1.68.0")
    implementation("io.grpc:grpc-protobuf:1.68.0")
    implementation("io.grpc:grpc-stub:1.68.0")
    implementation("io.grpc:grpc-services:1.68.0")

    // Redis client
    implementation("redis.clients:jedis:5.1.5")
    implementation("com.google.code.gson:gson:2.11.0")

    // Protobuf
    implementation("com.google.protobuf:protobuf-java:4.28.2")

    // Testing
    testImplementation("junit:junit:4.13.1")

    // Java libraries
    implementation("javax.annotation:javax.annotation-api:1.3.2")
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:4.28.2"
    }
    plugins {
        create("grpc") {
            artifact = "io.grpc:protoc-gen-grpc-java:1.68.0"
        }
    }
    generateProtoTasks {
        all().forEach { task ->
            task.plugins {
                create("grpc")
            }
        }
    }
}

tasks.named<JavaCompile>("compileJava") {
    dependsOn("generateProto")
}

tasks.test {
    useJUnitPlatform()
}