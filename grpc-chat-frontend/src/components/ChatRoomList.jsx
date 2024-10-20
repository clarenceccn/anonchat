import React from 'react'
import './list-styles.css'

const ChatRoomList = () => {
    return (
        <div class="chat-container">
            <div class="chat-title">Chat Rooms</div>

           <div class="chat-list">
                <div class="chat-item chat-item-general">
                    <p class="font-bold">General Chat</p>
                    <p class="text-sm">Last message: "See you tomorrow!"</p>
                </div>

                <div class="chat-item chat-item-general">
                    <p class="font-bold">Project Discussion</p>
                    <p class="text-sm">Last message: "The deadline is approaching..."</p>
                </div>

                <div class="chat-item chat-item-general">
                    <p class="font-bold">Tech Support</p>
                    <p class="text-sm">Last message: "How do I fix this issue?"</p>
                </div>

                <div class="chat-item chat-item-general">
                    <p class="font-bold">Random Chat</p>
                    <p class="text-sm">Last message: "Just chilling here..."</p>
                </div>

                <div class="chat-item chat-item-general">
                    <p class="font-bold">Gaming Channel</p>
                    <p class="text-sm">Last message: "Let’s play tonight!"</p>
                </div>
           </div>
        </div>
    );
};

export default ChatRoomList;