import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';


describe('Check all texts', () =>  {
    test('renders an H1 tag', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { name: /My Playground Project/i });
        expect(heading).toBeInTheDocument();
    });

    test('renders an P tag', () => {
        render(<App/>);
        const paragraph = screen.getByText(/My Playground Project/i);
        expect(paragraph).toBeInTheDocument();
    });

    test('renders an anchor tag', () => {
        render(<App/>);
        const anchor = screen.getByRole('link', { name: /Go to my website/i });
        expect(anchor).toBeInTheDocument();
        expect(anchor).toHaveAttribute('href', 'www.google.com')
    })
});

describe('Page link button',  () => {
    test('is available', () => {
        render(<App/>);
        const linkBtn = screen.getByRole('button', { name: /Change url/i });
        expect(linkBtn).toBeInTheDocument();
    });

    test('is clicked', async () => {
        user.setup();
        render(<App/>);
        const linkUrl = screen.getByRole('link', { name: /Go to my website/i });
        const linkBtn = screen.getByRole('button', { name: /Change url/i });
        await user.click(linkBtn);
        expect(linkUrl).toHaveAttribute('href', 'https://www.linkedin.com/feed/');
    })
})

