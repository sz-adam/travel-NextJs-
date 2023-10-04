import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'

type Props = {
  images: string[];
};

const DetailsCarousel = (props: Props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full h-[800px]  px-1 pt-2 relative group'>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className='w-full h-full max-lg:h-[80%] rounded-2xl bg-center bg-contain bg-no-repeat duration-500 bg-black/80 '
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%]  max-md:top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%]  max-md:top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center '>
      </div>
    </div>
  );
}

export default DetailsCarousel;

