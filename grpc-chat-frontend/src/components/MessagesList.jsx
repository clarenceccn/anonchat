import React from 'react'
import './message-list-styles.css'


const MessagesList = () => {
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
                />
                <button className="send-button">
                    Send
                </button>
            </div>
        </div>
    );
};

export default MessagesList;