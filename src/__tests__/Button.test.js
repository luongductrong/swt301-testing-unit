import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('renders button with label', () => {
  const label = "Click me";
  render(<Button label={label} onClick={() => {}} />);
  
  const buttonElement = screen.getByText(label);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn(); // mock function to track clicks
  render(<Button label="Click me" onClick={handleClick} />);

  const buttonElement = screen.getByText("Click me");
  fireEvent.click(buttonElement);  // simulate a click event

  expect(handleClick).toHaveBeenCalledTimes(1);  // check if onClick was called once
});
