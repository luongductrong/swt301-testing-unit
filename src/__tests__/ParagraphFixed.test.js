import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '../components/ParagraphFixed';

test('renders the paragraph with correct content', () => {
  const content = "Hi";
  const expectedText = `${content} React`;
  
  render(<Paragraph content={content} />);
  
  const paragraphElement = screen.queryByText(/Hi React/i);
  
  expect(paragraphElement).toBeInTheDocument(); 
  expect(paragraphElement ? paragraphElement.textContent : '').toMatch(expectedText); 
});

// Đây là testcase tương tự như trên nhưng sử dụng ParagraphFixed thay vì Paragraph.
//Vì ParagraphFixed thêm chuỗi " React" vào cuối nội dung với 1 dấu cách ở giữa, nên test case trên sẽ pass.//
//Ta chạy lệnh npm test -- src/__tests__/ParagraphFixed.test.js để kiểm tra kết quả.//