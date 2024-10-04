import React, { useEffect, useState } from 'react'; // Import thư viện react

const TimerFixed = () => {  
    const [seconds, setSeconds] = useState(0);  // Khởi tạo state seconds với giá trị ban đầu là 0

    useEffect(() => {                           // Sử dụng useEffect
        const intervalId = setInterval(() => {     // Tạo 1 interval
            setSeconds(prevSeconds => prevSeconds + 1);     // Tăng giá trị seconds lên 1
        }, 1000);                                       // Thực hiện mỗi 1000ms

        return () => clearInterval(intervalId);     // Xóa interval khi component bị hủy để tránh memory leak 
    }, []);                                         // Kết thúc useEffect, [] để chỉ chạy 1 lần khi component được render

    return (   // Trả về thẻ p hiển thị giá trị seconds 
        <div>
            <p>Seconds: {seconds}</p>
        </div>
    );
};

export default TimerFixed; // Xuất component ra ngoài
//TimerFixed để đếm số giây từ lúc component được mounted. Mỗi giây, giá trị seconds sẽ tăng lên 1. 
//Sử dụng useEffect với dependency là mảng rỗng để chạy 1 lần khi component được render và xóa interval khi component bị hủy để tránh memory leak.//