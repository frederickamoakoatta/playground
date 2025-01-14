import {render, screen} from "@testing-library/react";
import Input from "./Input";
import user from "@testing-library/user-event";

describe("Does Input", () => {
    test("exist in components", () => {
        render(<Input type={'text'}/>);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test("receive text when user types", async () => {
        user.setup();
        render(<Input type={'text'}/>);
        const input = screen.getByRole('textbox');
        await user.type(input, 'Hello');
        expect(input).toHaveValue('Hello');
    })
});