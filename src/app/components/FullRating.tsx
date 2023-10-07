import React from 'react'
import { Review } from '../types/travel';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

type Props = {
    reviews: Review[];
}

const FullRating = ({reviews}: Props) => {
    const reviewSum = reviews.reduce((sum, review) => sum + review.rating, 0);
    const reviewCount = reviews.length;
    
    const totalRating = reviewCount > 0 ? reviewSum / reviewCount : 0;
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {totalRating >= index + 1 ? (
                    <FaStar className='starIcon' />
                ) : totalRating >= number ? (
                    <FaStarHalfAlt className='starIcon' />
                ) : (
                    <AiOutlineStar className='starIcon' />
                )}
            </span>
        );
    });

    return <div className='flex justify-center items-center text-amber-600'>
        {ratingStar}
    </div>
    }

export default FullRating