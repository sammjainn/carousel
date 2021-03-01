import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (length <= 0) return null;
  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='arrow left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight
        className='arrow right-arrow'
        onClick={nextSlide}
      />
      {SliderData.map((item, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current ? (
              <img src={item.image} className='image' alt='carousel slides' />
            ) : (
              <div> </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
