import Header from "./Header";
import {render, screen} from "@testing-library/react";
import Button from "../button/Button";
import ButtonColors from "../button/ButtonColors";

describe("Does Header", () => {
    test("exist in components", () => {
        render(<Header navItems={['Home', 'About', 'Portfolio', 'Contact']} navActions={<Button state={ButtonColors.primary}>Action</Button>} hasActions={true} mode={'white'}/>);
        const header = screen.getByLabelText('header');
        expect(header).toBeInTheDocument();
    });

    test("has action(s)", () => {
        render(<Header navItems={['Home', 'About', 'Portfolio', 'Contact']} navActions={<Button state={ButtonColors.primary}>Action</Button>} hasActions={true} mode={'white'}/>);
        const action = screen.getByLabelText('actions');
        expect(action).toBeInTheDocument();
    })
});