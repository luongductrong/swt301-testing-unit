import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Timer from '../components/TimerFixed'; 

jest.useFakeTimers();

test('renders timer and updates every second', () => {
    render(<Timer />);
    
    const secondsElement = screen.getByText(/seconds:/i);
    
    // Kiểm tra giá trị ban đầu là 0
    expect(secondsElement).toHaveTextContent('Seconds: 0');
    
    // Tiến về phía trước 1 giây
    act(() => {
        jest.advanceTimersByTime(1000);
    });
    
    // Kiểm tra giá trị sau 1 giây
    expect(secondsElement).toHaveTextContent('Seconds: 1');
    
    // Tiến về phía trước 2 giây
    act(() => {
        jest.advanceTimersByTime(2000);
    });
    
    // Kiểm tra giá trị sau 3 giây
    expect(secondsElement).toHaveTextContent('Seconds: 3');
});
