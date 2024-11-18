import React, { useState, useEffect, useRef } from 'react'
import { ChatMessage, ChatMessageRequest } from './proto/chat_pb'
import { ChatRoomClient } from './proto/chat_grpc_web_pb'
import PrimaryButton from './components/PrimaryButton'
import './components/button-styles.css';
import './components/message-list-styles.css'

// Initialize gRPC-Web client
const chatClient = new ChatRoomClient('http://localhost:8080', null, null)

export const Chat = () => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState([])
    const messagesEndRef = useRef(null) // Create a ref for the end of the messages

// this is commented out to use frontend dev hot reload purposes with no backend
//     useEffect(() => {
//         // Example of streaming messages from the server
//         const receiveRequest = new ChatMessageRequest()
//         receiveRequest.setUsername("test")
//         receiveRequest.setChatroomid("chatroom1")
//         const stream = chatClient.subscribeToMessages(receiveRequest)
//
//         // listen for incoming messages
//         stream.on('data', (response) => {
//             console.log(response)
//             const message = response
//             setMessages((prevMessages) => [...prevMessages, message])
//         })
//
//         stream.on('end', () => {
//             console.log("Stream ended.")
//         })
//
//         return () => {
//             // stream.cancel()
//         }
//
//     }, [])

//     const sendMessage = () => {
//         const message = new ChatMessage()
//         message.setUsername('test')
//         message.setMessage(newMessage)
//         message.setChatroomid("chatroom1")
//         message.setTimestamp(new Date().toISOString())
//
//         chatClient.sendMessage(message, null, (err, response) => {
//             if (err) {
//                 console.error("ERROR happened", err)
//             } else {
//                 console.log("Message sent successfully")
//             }
//         })
//         setNewMessage('')
//     }

    //for hot reload dev purposes
    const sendMessage = () => {
        const message = new ChatMessage()
        message.setUsername('test')
        message.setMessage(newMessage)
        message.setChatroomid("chatroom1")
        message.setTimestamp(new Date().toISOString())

        setMessages((prevMessages) => [...prevMessages, message])
        setNewMessage('')
    }

    useEffect(() => {
        // Function to scroll to the bottom when new messages arrive
        const scrollToBottom = () => {
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        }

        scrollToBottom() // Scroll to bottom when the component mounts
    }, [messages]) // Dependency on messages to scroll when they change

  // Helper function to format timestamps
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp)
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    }
    return (
        <div>
            <h1>Chat Room</h1>
            <div
                id="messageContainer"
                style={{
                    height: '300px', // Set the height to your desired value
                    overflowY: 'auto', // Enable vertical scrolling
                    border: '1px solid #ccc',
                    padding: '10px',
                    marginBottom: '10px'
                }}
            >

            <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', marginRight: '10px' }}>
                            <strong style={{ whiteSpace: 'nowrap' }}>{msg.getUsername()}:</strong>
                            <span style={{
                                marginLeft: '5px',
                                wordWrap: 'break-word',
                                maxWidth: 'calc(100% - 120px)',
                                overflowWrap: 'break-word',
                                whiteSpace: msg.getMessage().length > 100 ? 'normal' : 'nowrap',
                                textAlign: 'left'
                            }}>
                                {msg.getMessage()}
                            </span>
                        </div>
                        <span style={{ fontSize: '0.8em', color: 'gray', whiteSpace: 'nowrap' }}>
                            {formatTimestamp(msg.getTimestamp())}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef} /> {/* Empty div to act as scroll target */}
            </div>
            </div>
            <input className="outline"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        document.getElementById('sendButton').click()
                    }
                }}
            />
            <PrimaryButton id="sendButton" onClick={sendMessage}>Send</PrimaryButton>
        </div>
    )
}