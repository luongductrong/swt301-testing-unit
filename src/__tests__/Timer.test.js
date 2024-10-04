import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from '..components/Timer'; // Đảm bảo rằng đường dẫn này đúng

jest.useFakeTimers();

test('renders timer and updates every second', () => {
    render(<Timer />);
    
    const secondsElement = screen.getByText(/seconds:/i);
    
    // Kiểm tra giá trị ban đầu là 0
    expect(secondsElement).toHaveTextContent('Seconds: 0');
    
    // Tiến về phía trước 1 giây
    jest.advanceTimersByTime(1000);
    
    // Kiểm tra giá trị sau 1 giây
    expect(secondsElement).toHaveTextContent('Seconds: 1');
    
    // Tiến về phía trước 2 giây
    jest.advanceTimersByTime(2000);
    
    // Kiểm tra giá trị sau 3 giây
    expect(secondsElement).toHaveTextContent('Seconds: 3');
});
