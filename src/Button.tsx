import React from 'react';
import './Button.css';

type ButtonProps = {
    text: string
}

function Button({text}: ButtonProps) {
    return (
        <button disabled className="Button">{text}</button>
    );
}

export default Button;