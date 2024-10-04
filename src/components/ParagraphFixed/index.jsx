import React from 'react'; // Import thư viện react
function ParagraphFixed({ content }) { // Nhận props content từ cha
    return <p>{`${content} React`}</p> // Thêm chuỗi "React" vào cuối nội dung với 1 dấu cách ở giữa
}

export default ParagraphFixed; // Xuất component ra ngoài
//ParagraphFixed nhận props content từ cha và hiển thị nội dung với chuỗi "React" được thêm vào cuối nội dung với 1 dấu cách ở giữa.