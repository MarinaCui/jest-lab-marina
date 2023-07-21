import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // screen.debug();
  userEvent.click(screen.getByTestId("checkbox"))
  expect(screen.getByTestId("checkbox")).toBeChecked()
});

test('renders "World" on the screen', () => {
  render(<App />);
  
  expect(screen.getByText(/world/i)).toBeInTheDocument();
});
