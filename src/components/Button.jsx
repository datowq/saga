import React from 'react';

const Button = ({ text, bgColor, bgHoverColor, textColor, textHoverColor, outlineColor, link }) => {
    return (
        <a href={link}>
            <button className={`w-48 outline outline-4 outline-${outlineColor} py-4 font-bold text-${textColor} bg-${bgColor} hover:text-${textHoverColor} hover:bg-${bgHoverColor}`}>
                {text}
            </button>
        </a>
    );
};

export default Button;