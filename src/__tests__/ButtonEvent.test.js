import React from 'react'; // Import thư viện react
import { render, screen, fireEvent } from '@testing-library/react'; // Import thư viện render, screen, fireEvent từ thư viện @testing-library/react
import Button from '../components/ButtonEvent'; // Import component Button từ đường dẫn

test('calls onClick when button is clicked', () => {    // Test case với mô tả
  const handleClick = jest.fn();    // Tạo hàm mock jest.fn() để theo dõi việc gọi hàm
  render(<Button onClick={handleClick} />); // Render component Button với props onClick là hàm handleClick

  const buttonElement = screen.getByText("Click me"); // Lấy button theo nội dung "Click me"
  fireEvent.click(buttonElement);     // Kích hoạt sự kiện click vào button 

  expect(handleClick).toHaveBeenCalledTimes(1);   // Kiểm tra hàm handleClick được gọi 1 lần
});

// Trong test case trên, chúng ta sử dụng jest.fn() để theo dõi việc gọi hàm handleClick.

// jest.fn() là một hàm mock giả lập một hàm khác và theo dõi việc gọi hàm đó.

// Sau đó, chúng ta render component Button với props onClick là hàm handleClick.
// Tiếp theo, chúng ta lấy button theo nội dung "Click me" và kích hoạt sự kiện click vào button bằng fireEvent.click(buttonElement).
// Cuối cùng, chúng ta kiểm tra hàm handleClick được gọi 1 lần bằng expect(handleClick).toHaveBeenCalledTimes(1).

// Với cách này, chúng ta có thể kiểm tra xem hàm onClick có được gọi khi button được click hay không.
// Đồng thời, chúng ta cũng có thể kiểm tra số lần hàm onClick được gọi bằng cách sử dụng jest.fn().
// Điều này giúp chúng ta dễ dàng xác định lỗi trong logic của component và viết test case phù hợp.

//Vì ButtonEvent gọi hàm onClick từ cha 2 lần, nên test case trên sẽ fail.//
//Ta chạy lệnh npm test -- src/__tests__/ButtonEvent.test.js để kiểm tra kết quả.//