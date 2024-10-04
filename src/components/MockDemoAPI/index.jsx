import React, { useEffect, useState } from 'react'; // Import thư viện react

export const fetchData = async () => {  // Hàm fetchData lấy dữ liệu từ API, async, await để xử lý bất đồng bộ
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Gọi API lấy dữ liệu từ jsonplaceholder
    if (!response.ok) {
        throw new Error(response.statusText || 'Network response was not ok'); // Nếu response không ok, throw error
    }
    return response.json(); // Trả về dữ liệu dưới dạng json nếu response ok
};

function MockDemoAPI() {
    const [data, setData] = useState(null);   // Khai báo state data với giá trị ban đầu là null
    const [error, setError] = useState(null); // Khai báo state error với giá trị ban đầu là null

    useEffect(() => {               // Sử dụng useEffect để gọi hàm fetchData
        const getData = async () => {   // Hàm getData gọi hàm fetchData
            try {
                const data = await fetchData(); // Gọi hàm fetchData để lấy dữ liệu, await để xử lý bất đồng bộ
                setData(data);      // Set state data với dữ liệu lấy được
            } catch (error) {
                setError(error.message);        // Set state error với thông báo lỗi
            }
        };
        getData();  // Gọi hàm getData đã được định nghĩa ở trên
    }, []);

    if (error) return <div>Error: {error}</div>; // Nếu có lỗi, hiển thị thông báo lỗi
    if (!data) return <div>Loading...</div>;  // Nếu chưa có dữ liệu, hiển thị thông báo Loading...

    return (
        <div>
            <h1>Mock API Data</h1>
            <ul>
                {data.map(item => (   // Hiển thị dữ liệu lấy được từ API
                    <li key={item.id}>{item.title}</li>  
                ))}
            </ul>
        </div>
    );
}

export default MockDemoAPI;

// Trong component MockDemoAPI, chúng ta sử dụng hàm fetchData để lấy dữ liệu từ API.
// Hàm fetchData sử dụng fetch để gọi API lấy dữ liệu từ jsonplaceholder.
// Nếu response không ok, hàm fetchData sẽ throw error.
// Nếu response ok, hàm fetchData sẽ trả về dữ liệu dưới dạng json.
// Sau đó, hiển thị dữ liệu lấy được từ API lên giao diện.