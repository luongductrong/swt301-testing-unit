import React from 'react';   // Import thư viện react
import { render, screen, fireEvent, waitFor } from '@testing-library/react';  
// Import thư viện render, screen, fireEvent, waitFor từ thư viện @testing-library/react
import Login from '../pages/login'; // Import component Login từ file Login.jsx

global.fetch = jest.fn();  // Mock fetch API để giả lập request và response thay vì gọi API thật

describe('Login Component', () => { // Test Suite cho component Login, test suite này chứa các test case liên quan đến component Login
  beforeEach(() => { // Hàm này sẽ chạy trước mỗi test case
    fetch.mockClear();  // Xóa hết các mock function của fetch trước đó
  });

  test('submits login form and displays request and response', async () => { // Test case này kiểm tra việc submit form đăng nhập và hiển thị request và response
    const mockResponse = { message: 'Đăng nhập thành công!' }; // Mock response từ API
    
    
    fetch.mockResolvedValueOnce({                 // Mock fetch API trả về giá trị sau khi gọi API
      ok: true,                                  // Mock response từ API
      json: async () => mockResponse,           //
      headers: {
        get: jest.fn().mockReturnValue('application/json'), // Mock header trả về từ API
      },
    });

    render(<Login />);     // Render component Login

    
    const userNameInput = screen.getByLabelText(/Tên đăng nhập/i);  // Lấy input có label là "Tên đăng nhập"
    const passwordInput = screen.getByLabelText(/Mật khẩu/i);      //   Lấy input có label là "Mật khẩu"
    const submitButton = screen.getByRole('button', { name: /Đăng nhập/i });   // Lấy button có nội dung là "Đăng nhập"

    
    fireEvent.change(userNameInput, { target: { value: 'testUser' } });     // Thay đổi giá trị của input "Tên đăng nhập" thành "testUser"
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } }); // Thay đổi giá trị của input "Mật khẩu" thành "testPassword"

    
    fireEvent.click(submitButton);    // Giả lập việc click vào button "Đăng nhập
    //fireEvent có tác dụng giả lập các sự kiện của người dùng, ở đây là giả lập sự kiện click và thay đổi giá trị của input

    
    await waitFor(() => {      // Chờ cho đến khi có kết quả trả về từ API
        
     //--------------------------------------------------------------// 
      expect(fetch).toHaveBeenCalledWith(expect.any(String), {   // Kiểm tra xem fetch API đã được gọi với đúng URL và method POST
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: 'testUser',
          password: 'testPassword',
        }),
      });

      
      expect(screen.getByText(/Request/i)).toHaveTextContent(   // Kiểm tra xem request đã được hiển thị đúng thông tin
        JSON.stringify({ userName: 'testUser', password: 'testPassword' })  //
      );
      expect(screen.getByText(/Response/i)).toHaveTextContent( // Kiểm tra xem response đã được hiển thị đúng thông tin
        JSON.stringify(mockResponse)
      );
    });
  });

  test('displays error message on failed login', async () => {  // Test case này kiểm tra việc hiển thị thông báo lỗi khi đăng nhập thất bại
    const mockResponse = "Tên đăng nhập hoặc mật khẩu không đúng";  
    
    fetch.mockResolvedValueOnce({ // Mock fetch API trả về giá trị sau khi gọi API
      ok: false,
      statusText: 'Unauthorized',  // Mock response từ API, trả về lỗi Unauthorized
      status: 401,
      text: async () => mockResponse,   
      headers: {
        get: jest.fn().mockReturnValue('text/plain'),   // Mock header trả về từ API
      },
    });

    render(<Login />);

    
    const userNameInput = screen.getByLabelText(/Tên đăng nhập/i); 
    const passwordInput = screen.getByLabelText(/Mật khẩu/i);
    const submitButton = screen.getByRole('button', { name: /Đăng nhập/i });

    
    fireEvent.change(userNameInput, { target: { value: 'wrongUser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongPassword' } });

    
    fireEvent.click(submitButton);  // Giả lập việc click vào button "Đăng nhập"

    
    await waitFor(() => {
      
      expect(screen.getByText(/Response/i)).toHaveTextContent(   // Kiểm tra xem response đã được hiển thị đúng thông tin Unauthorized: 401 chưa
        mockResponse
      );
    });
  });
});


// Trong test case trên, chúng ta đã sử dụng các hàm render, screen, fireEvent, waitFor từ thư viện @testing-library/react để test component Login.
// Hàm render dùng để render component Login.
// Hàm screen.getByLabelText dùng để lấy element có label tương ứng.
// Hàm screen.getByRole dùng để lấy element theo role. Cụ thể là lấy button Đăng nhập.
// Hàm fireEvent.change dùng để thay đổi giá trị của input.
// Hàm fireEvent.click dùng để giả lập việc click vào button Đăng nhập.
// Hàm waitFor dùng để chờ cho đến khi có kết quả trả về từ API.
// Trong test case thứ nhất, chúng ta đã kiểm tra việc submit form đăng nhập và hiển thị request và response.
// Trong test case thứ hai, chúng ta đã kiểm tra việc hiển thị thông báo lỗi khi đăng nhập thất bại.

// Chạy lệnh npm test -- src/__tests__/Login.test.js để kiểm tra kết quả.//