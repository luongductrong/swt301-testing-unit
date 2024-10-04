import React from 'react'; // Import thư viện react
function Paragraph({ content }) { // Nhận props content từ cha
    return <p>{`${content}  React`}</p> // Thêm chuỗi "React" vào cuối nội dung với 2 dấu cách ở giữa
}

export default Paragraph; // Xuất component ra ngoài
//Paragraph nhận props content từ cha và hiển thị nội dung với chuỗi "React" được thêm vào cuối nội dung với 2 dấu cách ở giữa.
//Giả sử với các logic phức tạp thì bug không dễ nhận biết như việc thêm 2 dấu cách ở giữa trong trường hợp này.//`;