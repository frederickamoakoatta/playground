import {render, screen} from "@testing-library/react";
import Toggle from "./Toggle";

describe("Does Toggle", () => {
    test("exist in components", () => {
        render(<Toggle />);
        const toggle = screen.getByLabelText('switch');
        expect(toggle).toBeInTheDocument();
    });

    test("checks correctly", () => {
        render(<Toggle />);
        const toggle = screen.getByLabelText('switch');
        expect(toggle).toBeTruthy();
    });

    test("show label when hasLabel is passed", () => {
        render(<Toggle hasLabel={true} label={'My label'}/>);
        const label =  screen.queryByLabelText('My label')
        expect(label).toBeInTheDocument();
    });
});