import SocialButton from "./SocialButton";
import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

describe('Does Social Button', () => {
    test('exist as a component', () => {
        render(<SocialButton type={'CTA'}>Test</SocialButton>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('onClick work', async () => {
        user.setup();
        const handleClick = jest.fn();
        render(<SocialButton type={'CTA'} onClick={handleClick}>Test</SocialButton>);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});