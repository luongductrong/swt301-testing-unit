import React from 'react'; // Import thư viện react
import { render, screen } from '@testing-library/react'; // Import thư viện render và screen từ thư viện testing-library/react
import Paragraph from '../components/Paragraph';  // Import component Paragraph từ đường dẫn components/Paragraph

test('renders the paragraph with correct content', () => {  // Test case kiểm tra component Paragraph với nội dung đúng
  const content = "Hi";                                   // Khai báo biến content với giá trị "Hi"
  const expectedText = `${content} React`;                // Khai báo biến expectedText với giá trị `${content} React`
  
  render(<Paragraph content={content} />);                // Render component Paragraph với props content là biến content
  
  const paragraphElement = screen.queryByText(/Hi React/i);   // Lấy element p theo nội dung "Hi React"
  
  expect(paragraphElement).toBeInTheDocument();         // Kiểm tra element p đã được render
  expect(paragraphElement ? paragraphElement.textContent : '').toMatch(expectedText);    // Kiểm tra nội dung của element p và so sánh với expectedText
});

// Trong test case trên, chúng ta kiểm tra component Paragraph với expectedText là `${content} React`
//tức là nội dung của element p sẽ là nội dung của props content cộng thêm chuỗi " React".
//Sau đó, chúng ta render component Paragraph với props content là biến content.
//Tiếp theo, chúng ta lấy element p theo nội dung "Hi React" và 
//kiểm tra xem element p đã được render hay chưa bằng expect(paragraphElement).toBeInTheDocument().
//Cuối cùng, chúng ta kiểm tra nội dung của element p và so sánh với expectedText bằng
// expect(paragraphElement ? paragraphElement.textContent : '').toMatch(expectedText).

//Với cách này, chúng ta có thể kiểm tra xem component Paragraph đã render đúng nội dung hay chưa.
//Vì return <p>{`${content}  React`}</p> có 2 dấu cách giữa content và React nên test case sẽ fail.
//Ta chạy lệnh npm test -- src/__tests__/Paragraph.test.js để kiểm tra kết quả.//