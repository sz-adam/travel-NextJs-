import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

type Props = {
    rating: number
}

const Rating = ({rating}: Props) => {    
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {rating >= index + 1 ? (
                    <FaStar className='starIcon' />
                ) : rating >= number ? (
                    <FaStarHalfAlt className='starIcon' />
                ) : (
                    <AiOutlineStar className='starIcon' />
                )}
            </span>
        );
    });

    return <div className='flex justify-center items-center text-amber-600'>        
        {ratingStar}
    </div>;
}

export default Rating