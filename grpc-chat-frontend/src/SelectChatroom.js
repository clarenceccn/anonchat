import React, { useState } from 'react';

const SelectChatroom = () => {
    const [chatroom, setChatroom] = useState('');

    const handleSend = () => {
        if(chatroom.trim()) {
            console.log('Message sent:', chatroom);
            setChatroom('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Select chat room </h1>
            <input class="border-4"
                type="text"
                value={chatroom}
                onChange={(e) => setChatroom(e.target.value)}
                placeholder="Type your chatroom ID"
                style={{ padding: '10px', width: '300px', marginRight: '10px' }}
            />
            <button class="border-4" onClick={handleSend} style={{ padding: '10px 20px' }}>
                Join Chatroom
            </button>
        </div>
    );
};

export default SelectChatroom;