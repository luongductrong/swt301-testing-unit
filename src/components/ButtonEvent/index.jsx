import React from 'react'; // Import thư viện react
function Button({ onClick }) { // Nhận props onClick từ cha
    const handleClick = () => { // Hàm xử lý sự kiện click
        onClick();     
        onClick();            // Gọi hàm onClick từ cha 2 lần
    };

    return <button onClick={handleClick}>Click me</button>; // Trả về button với sự kiện click
}

export default Button; // Xuất component ra ngoài
//Button nhận props onClick từ cha và hiển thị button với sự kiện click gọi hàm onClick từ cha 2 lần.//
//Giả sử với các logic phức tạp thì bug không dễ nhận biết như việc onClick được gọi 2 lần trong trường hợp này.//