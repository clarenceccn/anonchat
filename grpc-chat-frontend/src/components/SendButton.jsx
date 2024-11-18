import React from 'react'
import './button-styles.css'

const SendButton = ({id, children, onClick, className}) => {
    return (
        <button id={id} className={`send-button ${className}`} onClick={onClick}>
            {children}
        </button>
   );
};

export default SendButton;