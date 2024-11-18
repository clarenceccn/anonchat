import React, { useState, useEffect, useRef } from 'react'
import { ChatMessage, ChatMessageRequest } from '../proto/chat_pb'
import { ChatRoomClient } from '../proto/chat_grpc_web_pb'
import './message-list-styles.css'
import SendButton from './SendButton'


const MessagesList = () => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState([])
    const messagesEndRef = useRef(null) // Create a ref for the end of the messages

    const sendMessage = () => {
        const message = new ChatMessage()
        message.setUsername('test')
        message.setMessage(newMessage)
        message.setChatroomid("chatroom1")
        message.setTimestamp(new Date().toISOString())
        setMessages((prevMessages) => [...prevMessages, message])
        setNewMessage('')
    }

    return (
        <div className="main-container">
           {/* Message List */}
            <div className="message-container">
                <div className="message-container-inner">
                    {/* Individual Message */}
                    <div className="message-item-other">
                        <div className="message-other">
                            <p className="message-user">User 1</p>
                            <p className="message-text">Hello! How are you?</p>
                        </div>
                    </div>

                    <div className="message-item-self">
                        <div className="message-self">
                            <p className="message-user">You</p>
                            <p className="message-text">I'm good, thanks! How about you?</p>
                        </div>
                    </div>

                    <div className="message-item-other">
                         <div className="message-other">
                            <p className="message-user">User 1</p>
                            <p className="message-text">Doing well, thanks for asking!</p>
                         </div>
                    </div>

                </div>
            </div>

            {/* Input Field and Send Button */}
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="input-properties"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            document.getElementById('sendButton').click()
                        }
                    }}
                />
                <SendButton id="sendButton" onClick={sendMessage}>Send</SendButton>
            </div>
        </div>
    );
};

export default MessagesList;