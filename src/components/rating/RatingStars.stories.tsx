import {Meta, StoryObj} from "@storybook/react";
import RatingStars, {RATING_STARS} from "./RatingStars";

const meta : Meta = {
    title : 'Rating Stars',
    component : RatingStars,
    argTypes : {
        rate : {
            control: 'select',
            options : ['SET_RATING_STARS_0','SET_RATING_STARS_1', 'SET_RATING_STARS_2', 'SET_RATING_STARS_3', 'SET_RATING_STARS_4', 'SET_RATING_STARS_5'],
        }
    }
}
export default meta;

type Story = StoryObj<typeof RatingStars>;

export const FiveStarRating : Story = {
    args : {
        rate : RATING_STARS.SET_RATING_STARS_5,
    }
}

export const FourStarRating : Story = {
    args : {
        rate : RATING_STARS.SET_RATING_STARS_4,
    }
}

export const ThreeStarRating : Story = {
    args : {
        rate : RATING_STARS.SET_RATING_STARS_3,
    }
}

export const TwoStarRating : Story = {
    args : {
        rate : RATING_STARS.SET_RATING_STARS_2,
    }
}

export const OneStarRating : Story = {
    args : {
        rate : RATING_STARS.SET_RATING_STARS_1,
    }
}

export const ZeroStarRating : Story = {
    args : {
        rate : RATING_STARS.SET_RATING_STARS_0,
    }
}