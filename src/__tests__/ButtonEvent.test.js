import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/ButtonEvent';

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn(); 
  render(<Button onClick={handleClick} />);

  const buttonElement = screen.getByText("Click me");
  fireEvent.click(buttonElement);  

  expect(handleClick).toHaveBeenCalledTimes(1);  
});
