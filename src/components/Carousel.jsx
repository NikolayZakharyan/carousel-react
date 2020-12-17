import React from 'react';
import SlyderImg from './CarouselComponents/SlyderImg';
import { url } from '../ImageUrl/ImageURL.js';

const Carousel = () => {
  return (
    <>
      
        <SlyderImg image={url} />

      
    </>
  );
};

export default Carousel;
