import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components/button-styles.css';

const SelectChatroom = () => {
    const [chatroom, setChatroom] = useState('');
    const navigate = useNavigate();

    const handleSend = () => {
        if(chatroom.trim()) {
            console.log('Message sent:', chatroom);
            setChatroom('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Entering Chat Room </h1>
            <input class="outline"
                type="text"
                value={chatroom}
                onChange={(e) => setChatroom(e.target.value)}
                placeholder="Enter chatroom ID"
                style={{ padding: '10px', width: '300px', marginRight: '10px' }}
            />
            <button className="outline"
            onClick={() => navigate('/chatbox')}> Join ChatBox </button>
        </div>
    );
};

export default SelectChatroom;