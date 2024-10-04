import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/ButtonEventFixed';

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn(); 
  render(<Button onClick={handleClick} />);

  const buttonElement = screen.getByText("Click me");
  fireEvent.click(buttonElement);  

  expect(handleClick).toHaveBeenCalledTimes(1);  
});

// Đây là testcase tương tự như trên nhưng sử dụng ButtonEventFixed thay vì ButtonEvent.
//Vì ButtonEventFixed gọi hàm onClick từ cha 1 lần, nên test case trên sẽ pass.//
//Ta chạy lệnh npm test -- src/__tests__/ButtonEventFixed.test.js để kiểm tra kết quả.//