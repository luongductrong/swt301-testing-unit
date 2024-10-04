import React, { useEffect, useState } from 'react';

const TimerFixed = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>Seconds: {seconds}</p>
        </div>
    );
};

export default TimerFixed;
