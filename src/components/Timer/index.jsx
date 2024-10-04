import React, { useEffect, useState } from 'react'; // Import thư viện react

const Timer = () => {
    const [seconds, setSeconds] = useState(0); // Khởi tạo state seconds với giá trị ban đầu là 0

    useEffect(() => {                                // Sử dụng useEffect
        const intervalId = setInterval(() => {      // Tạo 1 interval
            setSeconds(prevSeconds => prevSeconds + 1); // Tăng giá trị seconds lên 1
        }, 1000);                                       // Thực hiện mỗi 1000ms
    });                                                   // Kết thúc useEffect mà không có dependency, nghĩa là chạy mỗi khi component được render

    return (    // Trả về thẻ p hiển thị giá trị seconds
        <div>
            <p>Seconds: {seconds}</p>   
        </div>
    );
};

export default Timer; // Xuất component ra ngoài

//Timer để đếm số giây từ lúc component được mounted. Mỗi giây, giá trị seconds sẽ tăng lên 1.
//Sử dụng useEffect mà không có dependency, nghĩa là chạy mỗi khi component được render.//
//Vấn đề: Timer không xóa interval khi component bị hủy, dẫn đến memory leak.//`;
//Nếu logic phức tạp hơn, việc xác định lỗi sẽ khó hơn.//