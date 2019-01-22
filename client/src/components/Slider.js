import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const items = [
  {
    src: '/assets/images/sm.jpg',
    altText: 'Smow Al Hayat'
  },
  {
    src: '/assets/images/123.jpg',
    altText: 'Smow Al Hayat'
  },
  {
    src: '/assets/images/3.jpg',
    altText: 'Smow Al Hayat'
  },
  {
    src: '/assets/images/4.jpg',
    altText: 'Smow Al Hayat'
  },
  {
    src: '/assets/images/5.jpg',
    altText: 'Smow Al Hayat'
  }
];

const Slider = () => (
  <div>
    <Carousel showStatus={false} infiniteLoop autoPlay>
      {items.map(({ src, altText }) => (
        <div key={src}>
          <img src={src} alt={altText} />
        </div>
      ))}
    </Carousel>
  </div>
);

export default Slider;
