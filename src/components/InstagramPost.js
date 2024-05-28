import React from 'react';

import Post01 from '../data/img/post-01.png';
import Post02 from '../data/img/post-02.png';
import Post03 from '../data/img/post-03.png';
import Post04 from '../data/img/post-04.png';
import Post05 from '../data/img/post-05.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsiveStyles = {
  xl: {
    breakpoint: {
      max: 1920,
      min: 1536,
    },
    items: 4,
    partialVisibilityGutter: 0,
  },
  lg: {
    breakpoint: {
      max: 1536,
      min: 1200,
    },
    items: 4,
    partialVisibilityGutter: 0,
  },
  md: {
    breakpoint: {
      max: 1200,
      min: 900,
    },
    items: 3,
    partialVisibilityGutter: 0,
  },
  sm: {
    breakpoint: {
      max: 900,
      min: 600,
    },
    items: 2,
    partialVisibilityGutter: 0,
  },
  xs: {
    breakpoint: {
      max: 600,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const imgStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default function InstagramPost() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={2000}
      centerMode={false}
      className=''
      containerClass='container-with-dots'
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass=''
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsiveStyles}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      <img src={Post01} alt='Instagram post' style={imgStyles} />
      <img src={Post02} alt='Instagram post' style={imgStyles} />
      <img src={Post03} alt='Instagram post' style={imgStyles} />
      <img src={Post04} alt='Instagram post' style={imgStyles} />
      <img src={Post05} alt='Instagram post' style={imgStyles} />
    </Carousel>
  );
}
