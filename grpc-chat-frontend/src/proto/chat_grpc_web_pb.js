/**
 * @fileoverview gRPC-Web generated client stub for org.devteam1.chatroom
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.1
// source: chat.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.org = {};
proto.org.devteam1 = {};
proto.org.devteam1.chatroom = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.org.devteam1.chatroom.ChatRoomClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.org.devteam1.chatroom.ChatRoomPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.devteam1.chatroom.ChatMessageRequest,
 *   !proto.org.devteam1.chatroom.ChatMessage>}
 */
const methodDescriptor_ChatRoom_receiveMessages = new grpc.web.MethodDescriptor(
  '/org.devteam1.chatroom.ChatRoom/receiveMessages',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.org.devteam1.chatroom.ChatMessageRequest,
  proto.org.devteam1.chatroom.ChatMessage,
  /**
   * @param {!proto.org.devteam1.chatroom.ChatMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.devteam1.chatroom.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.org.devteam1.chatroom.ChatMessageRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.org.devteam1.chatroom.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.org.devteam1.chatroom.ChatRoomClient.prototype.receiveMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/org.devteam1.chatroom.ChatRoom/receiveMessages',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_receiveMessages);
};


/**
 * @param {!proto.org.devteam1.chatroom.ChatMessageRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.org.devteam1.chatroom.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.org.devteam1.chatroom.ChatRoomPromiseClient.prototype.receiveMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/org.devteam1.chatroom.ChatRoom/receiveMessages',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_receiveMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.devteam1.chatroom.ChatMessageRequest,
 *   !proto.org.devteam1.chatroom.ChatMessage>}
 */
const methodDescriptor_ChatRoom_subscribeToMessages = new grpc.web.MethodDescriptor(
  '/org.devteam1.chatroom.ChatRoom/subscribeToMessages',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.org.devteam1.chatroom.ChatMessageRequest,
  proto.org.devteam1.chatroom.ChatMessage,
  /**
   * @param {!proto.org.devteam1.chatroom.ChatMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.devteam1.chatroom.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.org.devteam1.chatroom.ChatMessageRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.org.devteam1.chatroom.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.org.devteam1.chatroom.ChatRoomClient.prototype.subscribeToMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/org.devteam1.chatroom.ChatRoom/subscribeToMessages',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_subscribeToMessages);
};


/**
 * @param {!proto.org.devteam1.chatroom.ChatMessageRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.org.devteam1.chatroom.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.org.devteam1.chatroom.ChatRoomPromiseClient.prototype.subscribeToMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/org.devteam1.chatroom.ChatRoom/subscribeToMessages',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_subscribeToMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.devteam1.chatroom.ChatMessage,
 *   !proto.org.devteam1.chatroom.StringMessage>}
 */
const methodDescriptor_ChatRoom_sendMessage = new grpc.web.MethodDescriptor(
  '/org.devteam1.chatroom.ChatRoom/sendMessage',
  grpc.web.MethodType.UNARY,
  proto.org.devteam1.chatroom.ChatMessage,
  proto.org.devteam1.chatroom.StringMessage,
  /**
   * @param {!proto.org.devteam1.chatroom.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.devteam1.chatroom.StringMessage.deserializeBinary
);


/**
 * @param {!proto.org.devteam1.chatroom.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.devteam1.chatroom.StringMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.devteam1.chatroom.StringMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.devteam1.chatroom.ChatRoomClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.devteam1.chatroom.ChatRoom/sendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_sendMessage,
      callback);
};


/**
 * @param {!proto.org.devteam1.chatroom.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.devteam1.chatroom.StringMessage>}
 *     Promise that resolves to the response
 */
proto.org.devteam1.chatroom.ChatRoomPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.devteam1.chatroom.ChatRoom/sendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_sendMessage);
};


module.exports = proto.org.devteam1.chatroom;

