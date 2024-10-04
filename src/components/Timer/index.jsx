import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Dọn dẹp interval khi component bị unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>Seconds: {seconds}</p>
        </div>
    );
};

export default Timer;
