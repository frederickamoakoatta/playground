import {RatesType, RATING_STARS} from "./RatingStars.tsx";

const ratingReducer = (state: RatesType, action: { type: RATING_STARS }) => {
    switch (action.type) {
        case RATING_STARS.SET_RATING_STARS_0:
            return {...state, star1: false, star2: false, star3: false, star4: false, star5: false};
        case RATING_STARS.SET_RATING_STARS_1:
            return {...state, star1: true, star2: false, star3: false, star4: false, star5: false};
        case RATING_STARS.SET_RATING_STARS_2:
            return {...state, star1: true, star2: true, star3: false, star4: false, star5: false};
        case RATING_STARS.SET_RATING_STARS_3:
            return {...state, star1: true, star2: true, star3: true, star4: false, star5: false};
        case RATING_STARS.SET_RATING_STARS_4:
            return {...state, star1: true, star2: true, star3: true, star4: true, star5: false};
        case RATING_STARS.SET_RATING_STARS_5:
            return {...state, star1: true, star2: true, star3: true, star4: true, star5: true};
        default :
            return state;
    }
}
export default ratingReducer;