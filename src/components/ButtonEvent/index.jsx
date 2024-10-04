import React from 'react';
function Button({ onClick }) {
    const handleClick = () => {
        onClick();
        onClick();
    };

    return <button onClick={handleClick}>Click me</button>;
}

export default Button;