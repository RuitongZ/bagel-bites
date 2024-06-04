import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { CustomLeftArrow, CustomRightArrow } from '../ui/CustomArrow';

import bagelImg from '../data/bagelImg';
// import bagel01 from '../data/img/bagels/sesame-bagel.png';
// import bagel02 from '../data/img/bagels/cheese-bagel.png';
// import bagel03 from '../data/img/bagels/plainbagel.png';
// import bagel04 from '../data/img/bagels/montreal-style-bagel-sandwich.png';
// import bagel05 from '../data/img/bagels/ham&cheese-bagel-sandwich.png';
// import bagel06 from '../data/img/bagels/everything.png';

const responsiveStyles = {
  xl: {
    breakpoint: {
      max: 1920,
      min: 1536,
    },
    items: 4,
    partialVisibilityGutter: 20,
  },
  lg: {
    breakpoint: {
      max: 1536,
      min: 1200,
    },
    items: 3,
    partialVisibilityGutter: 20,
  },
  md: {
    breakpoint: {
      max: 1200,
      min: 900,
    },
    items: 3,
    partialVisibilityGutter: 20,
  },
  sm: {
    breakpoint: {
      max: 900,
      min: 600,
    },
    items: 2,
    partialVisibilityGutter: 20,
  },
  xs: {
    breakpoint: {
      max: 600,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

const ImgContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ArchBackground = styled(Box)({
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  positions: 'relative',
  overFlow: 'hidden',
});

const ArchStyles = {
  maxHeight: {
    xs: '280px',
    sm: '300px',
    md: '320px',
    lg: '340px',
    xl: '360px',
  },
  maxWidth: {
    xs: '260px',
    sm: '280px',
    md: '300px',
    lg: '320px',
    xl: '340px',
  },
  marginX: {
    xs: '10px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '25px',
  },
  borderTopLeftRadius: {
    xs: '130px',
    sm: '140px',
    md: '150px',
    lg: '160px',
    xl: '170px',
  },
  borderTopRightRadius: {
    xs: '130px',
    sm: '140px',
    md: '150px',
    lg: '160px',
    xl: '170px',
  },
};

const imgStyles = {
  width: '80%',
  height: 'auto',
  objectFit: 'cover',
  display: 'flex',
  justifyContent: 'center',
  filter: 'drop-shadow(4px 8px 4px rgba(0, 0, 0, 0.2))',
  marginTop: '150px',
};

const productNameStyles = {
  marginTop: '40px',
  textAlign: 'center',
  fontSize: {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 30,
  },
};

export default function BagelCarousel() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass='container'
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
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
      {bagelImg.map((image, index) => (
        <ImgContainer key={index}>
          <ArchBackground sx={ArchStyles}>
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={imgStyles}
            />
          </ArchBackground>
          <Typography variant='h6' sx={productNameStyles}>
            {image.name}
          </Typography>
        </ImgContainer>
      ))}

      {/* <ImgContainer>
        <ArchBackground sx={ArchStyles}>
          <img src={bagel01} alt='sesame bagel' style={imgStyles} />
        </ArchBackground>
        <Typography variant='h6' sx={productNameStyles}>
          Sesame Bagel
        </Typography>
      </ImgContainer>

      <ImgContainer>
        <ArchBackground sx={ArchStyles}>
          <img src={bagel02} alt='cheese bagel' style={imgStyles} />
        </ArchBackground>
        <Typography variant='h6' sx={productNameStyles}>
          Cheese Bagel
        </Typography>
      </ImgContainer>

      <ImgContainer>
        <ArchBackground sx={ArchStyles}>
          <img src={bagel03} alt='plain bagel' style={imgStyles} />
        </ArchBackground>
        <Typography variant='h6' sx={productNameStyles}>
          Plain Bagel
        </Typography>
      </ImgContainer>

      <ImgContainer>
        <ArchBackground sx={ArchStyles}>
          <img src={bagel06} alt='everything bagel' style={imgStyles} />
        </ArchBackground>
        <Typography variant='h6' sx={productNameStyles}>
          Everything Bagel
        </Typography>
      </ImgContainer>

      <ImgContainer>
        <ArchBackground sx={ArchStyles}>
          <img
            src={bagel04}
            alt='montreal style bagel sandwich'
            style={imgStyles}
          />
        </ArchBackground>
        <Typography variant='h6' sx={productNameStyles}>
          Montreal Style Bagel
        </Typography>
      </ImgContainer>

      <ImgContainer>
        <ArchBackground sx={ArchStyles}>
          <img
            src={bagel05}
            alt='ham&cheese bagel sandwich'
            style={imgStyles}
          />
        </ArchBackground>
        <Typography variant='h6' sx={productNameStyles}>
          Bagel with Ham & Cheese
        </Typography>
      </ImgContainer> */}
    </Carousel>
  );
}
