import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText(/Welcome to Cat App!/i);
  expect(header).toBeInTheDocument();
});
