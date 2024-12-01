import React, { useMemo } from 'react';

import SvgStarIcon from '../common/SvgStarIcon';
import {SvgEmptyStar} from '../common/SvgEmptyStar';


const Rating = ({ rating }) => {
    const filledStars = useMemo(() => {
        return Array(Math.floor(Number(rating))).fill();
    }, [rating]);

    const emptyStars = useMemo(() => {
        return Array(5 - filledStars.length).fill();
    }, [filledStars]);

    return (
        <div className='flex items-center'>
            {filledStars.map((_, index) => (
                <SvgStarIcon key={index} />
            ))}
            {emptyStars.map((_, index) => (
                <SvgEmptyStar key={'empty-' + index} />
            ))
            }
            <p className='px-2 text-gray-500'>{rating}</p>
        </div>
    );
};

export default Rating;
