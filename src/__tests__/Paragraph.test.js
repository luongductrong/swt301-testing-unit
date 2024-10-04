import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '../components/Paragraph';

test('renders the paragraph with correct content', () => {
  const content = "Hi";
  const expectedText = `${content} React`;
  
  render(<Paragraph content={content} />);
  
  const paragraphElement = screen.queryByText(/Hi React/i);
  
  expect(paragraphElement).toBeInTheDocument(); 
  expect(paragraphElement ? paragraphElement.textContent : '').toMatch(expectedText); 
});
