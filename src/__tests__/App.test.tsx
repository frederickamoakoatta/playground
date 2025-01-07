import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders an H1 tag', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /My Playground Project/i });
    // expect(heading).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
});
