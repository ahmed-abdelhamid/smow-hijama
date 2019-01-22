import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { IMAGES } from '../fixtures/sliderImages';

const Slider = () => (
  <div>
    <Carousel showStatus={false} infiniteLoop autoPlay>
      {IMAGES.map(({ src, altText }) => (
        <div key={src}>
          <img src={src} alt={altText} />
        </div>
      ))}
    </Carousel>
  </div>
);

export default Slider;
