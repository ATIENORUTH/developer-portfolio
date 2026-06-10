import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio without crashing', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/Portfolio/i);
  expect(headerElements[0]).toBeInTheDocument();
});
