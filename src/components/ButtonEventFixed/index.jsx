import React from 'react';
function ButtonEventFixed({ onClick }) {
    const handleClick = () => {
        onClick();
    };

    return <button onClick={handleClick}>Click me</button>;
}

export default ButtonEventFixed;