import React from 'react';
import './list-styles.css'

const ScrollableListView = () => {
    return (
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
    );
};

export default ScrollableListView