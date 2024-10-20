import React from 'react'
import './button-styles.css'

const PrimaryButton = ({id, children, onClick, className}) => {
    return (
        <button id={id} className={`btn btn-blue ${className}`} onClick={onClick}>
            {children}
        </button>
   );
};

export default PrimaryButton;