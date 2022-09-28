import { render, screen } from '@testing-library/react';
import PickColor from './PickColor';

test('renders learn react link', () => {
  render(<PickColor />);
  const linkElement = screen.getByText(/Pick the color/i);
  expect(linkElement).toBeInTheDocument();
});
