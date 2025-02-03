import {render, screen} from "@testing-library/react";
import Toggle from "./Toggle";

describe("Does Toggle", () => {
    const setToggle = jest.fn();

    test("exist in components", () => {
        render(<Toggle defaultVal={false} setDefaultVal={setToggle}/>);
        const toggle = screen.getByLabelText('switch');
        expect(toggle).toBeInTheDocument();
    });

    test("checks correctly", () => {
        render(<Toggle defaultVal={false} setDefaultVal={setToggle}/>);
        const toggle = screen.getByLabelText('switch');
        expect(toggle).toBeTruthy();
    });

    test("show label when hasLabel is passed", () => {
        render(<Toggle hasLabel label={'My label'} defaultVal={false} setDefaultVal={setToggle}/>);
        const label =  screen.queryByLabelText('My label')
        expect(label).toBeInTheDocument();
    });
});