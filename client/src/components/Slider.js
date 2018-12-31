import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';

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

class Slider extends Component {
  state = { activeIndex: 0 };

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
      </Carousel>
    );
  }
}

export default Slider;
