import RatingStars, {RATING_STARS} from "./RatingStars";
import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

describe('Does Rating stars', () => {
    test('exists in component', () => {
        render(<RatingStars rate={RATING_STARS.SET_RATING_STARS_3}/>);
        const star1 = screen.getByLabelText('star1');
        const star2 = screen.getByLabelText('star2');
        const star3 = screen.getByLabelText('star3');
        expect(star1).toHaveClass('rate active');
        expect(star2).toHaveClass('rate active');
        expect(star3).toHaveClass('rate active');
    });

    test('accepts user selection', async () => {
        user.setup();
        render(<RatingStars/>);
        const star1 = screen.getByLabelText('star1');
        const star2 = screen.getByLabelText('star2');
        const star3 = screen.getByLabelText('star3');
        const star4 = screen.getByLabelText('star4');
        const star5 = screen.getByLabelText('star5');
        await user.click(star3);
        expect(star1).toHaveClass('rate active');
        expect(star2).toHaveClass('rate active');
        expect(star3).toHaveClass('rate active');
        expect(star4).toHaveClass('rate');
        expect(star5).toHaveClass('rate');
    })
});