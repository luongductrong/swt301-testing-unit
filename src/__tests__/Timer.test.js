import React from 'react';      // Import thư viện react
import { render, screen, act } from '@testing-library/react';   // Import thư viện render, screen và act từ thư viện testing-library/react
import Timer from '../components/Timer';        // Import component Timer từ đường dẫn components/Timer

jest.useFakeTimers();          // Sử dụng fake timers để kiểm tra timer trong test case

test('renders timer and updates every second', () => {  // Test case kiểm tra component Timer và cập nhật mỗi giây
    render(<Timer />);                                  // Render component Timer
    
    const secondsElement = screen.getByText(/seconds:/i);   // Lấy element theo nội dung "Seconds:"
    
    // Kiểm tra giá trị ban đầu là 0
    expect(secondsElement).toHaveTextContent('Seconds: 0'); // Kiểm tra giá trị ban đầu là 0, giá trị expect là 'Seconds: 0'
    
    // Tiến về phía trước 1 giây
    act(() => {                                             // Sử dụng act để thực hiện hành động
        jest.advanceTimersByTime(1000);                     // Tiến về phía trước 1000ms, tương đương 1 giây
    });
    
    // Kiểm tra giá trị sau 1 giây
    expect(secondsElement).toHaveTextContent('Seconds: 1'); // Kiểm tra giá trị sau 1 giây, giá trị expect là 'Seconds: 1'
    
    // Tiến về phía trước 2 giây
    act(() => {                                             // Sử dụng act để thực hiện hành động
        jest.advanceTimersByTime(2000);                     // Tiến về phía trước 2000ms, tương đương 2 giây
    });
    
    // Kiểm tra giá trị sau 3 giây
    expect(secondsElement).toHaveTextContent('Seconds: 3'); // Kiểm tra giá trị sau 3 giây, giá trị expect là 'Seconds: 3'
});

// Trong test case trên, chúng ta sử dụng jest.useFakeTimers() để sử dụng fake timers trong test case.
// Đầu tiên, chúng ta render component Timer bằng render(<Timer />).
// Tiếp theo, chúng ta lấy element theo nội dung "Seconds:" bằng const secondsElement = screen.getByText(/seconds:/i).
// Sau đó, chúng ta kiểm tra giá trị ban đầu của secondsElement là 'Seconds: 0' bằng expect(secondsElement).toHaveTextContent('Seconds: 0').
// Tiếp theo, chúng ta sử dụng act() để tiến về phía trước 1 giây bằng jest.advanceTimersByTime(1000).
// Chúng ta kiểm tra giá trị sau 1 giây của secondsElement là 'Seconds: 1' bằng expect(secondsElement).toHaveTextContent('Seconds: 1').
// Cuối cùng, chúng ta sử dụng act() để tiến về phía trước 2 giây bằng jest.advanceTimersByTime(2000).
// Chúng ta kiểm tra giá trị sau 3 giây của secondsElement là 'Seconds: 3' bằng expect(secondsElement).toHaveTextContent('Seconds: 3').
// Với cách này, chúng ta có thể kiểm tra xem component Timer có cập nhật giá trị mỗi giây hay không.
// Đồng thời, chúng ta cũng có thể kiểm tra giá trị của timer sau mỗi khoảng thời gian nhất định.

// jest.useFakeTimers() là một hàm mock giả lập timers trong Jest.

//Vì Timer không xóa interval khi component bị hủy và không có dependency trong useEffect,
// dẫn đến xuất hiện nhiều interval và giá trị seconds không chính xác.//
//Vì vậy test case trên sẽ fail.//
//Ta chạy lệnh npm test -- src/__tests__/Timer.test.js để kiểm tra kết quả.//