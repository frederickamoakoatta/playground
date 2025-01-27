import './RatingStars.scss';
import {useEffect, useReducer} from "react";
import ratingReducer from "./RatingReducer";

export enum RATING_STARS {
    SET_RATING_STARS_0 = 'SET_RATING_STARS_0',
    SET_RATING_STARS_1 = 'SET_RATING_STARS_1',
    SET_RATING_STARS_2 = 'SET_RATING_STARS_2',
    SET_RATING_STARS_3 = 'SET_RATING_STARS_3',
    SET_RATING_STARS_4 = 'SET_RATING_STARS_4',
    SET_RATING_STARS_5 = 'SET_RATING_STARS_5'
}

export type RatesType = {
    star1: boolean,
    star2: boolean,
    star3: boolean,
    star4: boolean,
    star5: boolean
}

interface RatingStarsProps {
    rate?: RATING_STARS;
}


const RatingStars = ({rate}: RatingStarsProps) => {

    const rates = {star1: false, star2: false, star3: false, star4: false, star5: false};
    const [currentRate, dispatch] = useReducer(ratingReducer, rates);

    const setRating = (_rate: RATING_STARS) => {
        dispatch({type: _rate})
    }

    useEffect(() => {
        dispatch({type: rate ?? RATING_STARS.SET_RATING_STARS_0})
    }, [rate])

    return (
        <>
            <div className="rating">
                <span aria-label={'star1'} className={currentRate.star1 ? 'rate active' : 'rate'}
                          onClick={() => setRating(RATING_STARS.SET_RATING_STARS_1)}>&#9733;</span>


                <span aria-label={'star2'} className={currentRate.star2 ? 'rate active' : 'rate'}
                      onClick={() => setRating(RATING_STARS.SET_RATING_STARS_2)}>&#9733;</span>


                <span aria-label={'star3'} className={currentRate.star3 ? 'rate active' : 'rate'}
                      onClick={() => setRating(RATING_STARS.SET_RATING_STARS_3)}>&#9733;</span>


                <span aria-label={'star4'} className={currentRate.star4 ? 'rate active' : 'rate'}
                      onClick={() => setRating(RATING_STARS.SET_RATING_STARS_4)}>&#9733;</span>


                <span aria-label={'star5'} className={currentRate.star5 ? 'rate active' : 'rate'}
                      onClick={() => setRating(RATING_STARS.SET_RATING_STARS_5)}>&#9733;</span>

            </div>
        </>
    )
}
export default RatingStars;