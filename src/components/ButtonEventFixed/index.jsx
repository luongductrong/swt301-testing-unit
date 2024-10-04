import React from 'react'; // Import thư viện react
function ButtonEventFixed({ onClick }) { // Nhận props onClick từ cha
    const handleClick = () => { // Hàm xử lý sự kiện click
        onClick();               // Gọi hàm onClick từ cha 1 lần
    };

    return <button onClick={handleClick}>Click me</button>; // Trả về button với sự kiện click
}

export default ButtonEventFixed;    // Xuất component ra ngoài
//ButtonEventFixed nhận props onClick từ cha và hiển thị button với sự kiện click gọi hàm onClick từ cha 1 lần.//