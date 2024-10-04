import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Welcome link', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});

test('renders Button component', () => {
  render(<App />);

  const buttonElement = screen.getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});
