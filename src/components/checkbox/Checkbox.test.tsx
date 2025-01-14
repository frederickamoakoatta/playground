import {render, screen} from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Does Checkbox", () => {
    test("exist in components", () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    test("checks correctly", () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeTruthy();
    });

    test("show label when hasLabel is passed", () => {
        render(<Checkbox hasLabel={true} label={'My label'}/>);
        const label =  screen.queryByLabelText('My label')
        expect(label).toBeInTheDocument();
    });
});