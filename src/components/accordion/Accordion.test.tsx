import {render, screen} from "@testing-library/react";
import Accordion from "./Accordion";
import user from "@testing-library/user-event";


describe('Does accordion', () => {
    test('exist as component', () => {
        render(<Accordion header={'Header'} content={'Main content'}/>);
        const accordionHeader = screen.getByLabelText('accordion header');
        expect(accordionHeader).toBeInTheDocument();
    });

    test('show content on render', () => {
        render(<Accordion header={'Header'} content={'Main content'}/>)
        const accordionBody = screen.queryByLabelText('accordion content');
        expect(accordionBody).toBeInTheDocument();
    });

    test('hide content when header is clicked', async () => {
        user.setup();
        render(<Accordion header={'Header'} content={'Main content'}/>);
        const accordionHeader = screen.getByLabelText('accordion header');
        await user.click(accordionHeader);
        const accordionBody = screen.queryByLabelText('accordion content');
        expect(accordionBody).not.toBeInTheDocument();
    });

})