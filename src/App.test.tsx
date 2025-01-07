import { render, screen } from '@testing-library/react';
import App from './App';

describe('Check all texts', () =>  {
    test('renders an H1 tag', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { name: /My Playground Project/i });
        expect(heading).toBeInTheDocument();
    });

    test('renders an P tag', () => {
        render(<App/>);
        const paragraph = screen.getByText(/It is a very sunny day today/i);
        expect(paragraph).toBeInTheDocument();
    });

    test('renders an anchor tag', () => {
        render(<App/>);
        const anchor = screen.getByRole('link', { name: /Go to my website/i });
        expect(anchor).toBeInTheDocument();
        expect(anchor).toHaveAttribute('href', 'www.google.com')
    })
})

