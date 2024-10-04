import React from 'react'; // Import thư viện react
import { render, screen, waitFor, act } from '@testing-library/react'; // Import thư viện render, screen, waitFor, act từ thư viện @testing-library/react
import MockDemoAPI from '../components/MockDemoAPI'; // Import component MockDemoAPI từ đường dẫn components/MockDemoAPI

// Mock fetch function
global.fetch = jest.fn(() => // Mock fetch function, để giả lập việc fetch dữ liệu từ API
  Promise.resolve({         // Trả về Promise với giá trị là object, Promise là một đối tượng biểu diễn một giá trị chưa được xác định tại thời điểm tạo ra Promise
    ok: true,  //Promise.resolve() trả về một Promise đã được giải quyết với giá trị true
    json: () => Promise.resolve([{ id: 1, title: 'Test Post' }]), // Trả về một Promise đã được giải quyết với giá trị là mảng object
  })
);

test('displays data when fetch is successful', async () => { // Test case kiểm tra hiển thị dữ liệu khi fetch thành công
  await act(async () => {   // Sử dụng act để đảm bảo việc render component hoàn tất
    render(<MockDemoAPI />); // Render component MockDemoAPI
  });
  await act(async () => {  // Sử dụng act để đảm bảo việc render dữ liệu hoàn tất
    await waitFor(() => expect(screen.getByText('Mock API Data')).toBeInTheDocument()); // Kiểm tra xem dữ liệu đã được render chưa
    expect(screen.getByText('Test Post')).toBeInTheDocument();   // Kiểm tra xem dữ liệu 'Test Post' lấy từ mock API đã được render chưa
  });
});

test('displays error message when fetch fails', async () => {  // Test case kiểm tra hiển thị thông báo lỗi khi fetch thất bại
  fetch.mockImplementationOnce(() => Promise.resolve({  // Mock fetch function, để giả lập việc fetch dữ liệu từ API
    ok: false,   
    statusText: 'Fetch error'
  }));
  await act(async () => {   // Sử dụng act để đảm bảo việc render component hoàn tất
    render(<MockDemoAPI />); // Render component MockDemoAPI
  });
  await act(async () => { // Sử dụng act để đảm bảo việc render dữ liệu hoàn tất
    await waitFor(() => expect(screen.getByText('Error: Fetch error')).toBeInTheDocument()); // Kiểm tra xem thông báo lỗi đã được render chưa
  });  // waitFor() chờ cho đến khi điều kiện trong hàm callback trả về true thì mới tiếp tục thực hiện
});

// Trong test case trên, chúng ta sử dụng global.fetch = jest.fn() để mock fetch function.
// Đầu tiên, chúng ta mock fetch function bằng global.fetch = jest.fn() để giả lập việc fetch dữ liệu từ API.
// Tiếp theo, chúng ta sử dụng act() để đảm bảo việc render component hoàn tất.
// Chúng ta render component MockDemoAPI bằng render(<MockDemoAPI />).
// Sau đó, chúng ta sử dụng act() để đảm bảo việc render dữ liệu hoàn tất.
// Chúng ta sử dụng waitFor() để kiểm tra xem dữ liệu đã được render chưa bằng expect(screen.getByText('Mock API Data')).toBeInTheDocument().
// Chúng ta kiểm tra xem dữ liệu 'Test Post' lấy từ mock API đã được render chưa bằng expect(screen.getByText('Test Post')).toBeInTheDocument().
// Với cách này, chúng ta có thể kiểm tra xem component MockDemoAPI hiển thị dữ liệu từ API thành công hay không.
// Đồng thời, chúng ta cũng có thể kiểm tra xem component MockDemoAPI hiển thị thông báo lỗi khi fetch thất bại hay không.

// Vì fetch function được mock bằng global.fetch = jest.fn() nên không gọi API thực sự, mà trả về dữ liệu giả lập.
// Mock là một cách giả lập một hàm hoặc module trong Jest để kiểm tra logic của component mà không cần gọi API thực sự.
// Điều này giúp chúng ta kiểm tra xem component hoạt động đúng hay không trong các trường hợp khác nhau mà không cần phụ thuộc vào API thực sự.

// Ta chạy lệnh npm test -- src/__tests__/MockDemoAPI.test.js để kiểm tra kết quả.//