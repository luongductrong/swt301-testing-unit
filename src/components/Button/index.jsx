import React from 'react';
function Button({ label, onClick }) {
    const handleClick = () => {
        // onClick();
        onClick();
    };

    return <button onClick={handleClick}>{`${label}`}</button>;
}

export default Button;