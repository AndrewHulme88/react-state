import { render, screen } from '@testing-library/react';
import App from './App';
import Button from "./Button.jsx";

test('renders learn react link', () => {
  render(<Button />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
