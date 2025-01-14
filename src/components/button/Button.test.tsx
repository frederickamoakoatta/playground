import Button from "./Button";
import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import ButtonColors from "./ButtonColors";

describe('Does Button', () => {
    test('exist as a component', () => {
        render(<Button state={ButtonColors.primary}>Test</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('onClick work', async () => {
        user.setup();
        const handleClick = jest.fn();
        render(<Button state={ButtonColors.primary} onClick={handleClick}>Test</Button>);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

});