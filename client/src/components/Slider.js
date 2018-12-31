import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/assets/images/1.jpg',
    altText: 'Smow Al Hayat'
  },
  {
    src: '/assets/images/6.jpg',
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
  <UncontrolledCarousel
    className="pb-3"
    items={items}
    indicators={false}
    controls={false}
    pause={false}
  />
);

export default Slider;
