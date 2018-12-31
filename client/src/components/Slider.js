import React from 'react';
import { UncontrolledCarousel, Container } from 'reactstrap';

const items = [
  {
    src: '/assets/images/1.jpg',
    altText: 'Smow Al Hayat'
  },
  {
    src: '/assets/images/2.jpg',
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
  <Container>
    <UncontrolledCarousel
      items={items}
      indicators={false}
      controls={false}
      pause={false}
    />
  </Container>
);

export default Slider;
