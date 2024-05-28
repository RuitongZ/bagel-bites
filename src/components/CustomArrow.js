import React from 'react';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const iconLeftButtonStyles = {
  position: 'absolute',
  top: '50%',
  backgroundColor: '#000',
  borderRadius: '50%',
  ':hover': { backgroundColor: '#fff' },
  width: {
    xs: '20px',
    sm: '30px',
    md: '40px',
    lg: '40px',
    xl: '60px',
  },
  height: {
    xs: '20px',
    sm: '30px',
    md: '40px',
    lg: '40px',
    xl: '60px',
  },
};

const iconRightButtonStyles = {
  position: 'absolute',
  right: '10px',
  top: '50%',
  backgroundColor: '#000',
  borderRadius: '50%',
  ':hover': { backgroundColor: '#fff' },
  width: {
    xs: '20px',
    sm: '30px',
    md: '40px',
    lg: '40px',
    xl: '60px',
  },
  height: {
    xs: '20px',
    sm: '30px',
    md: '40px',
    lg: '40px',
    xl: '60px',
  },
};

const iconStyles = {
  color: '#fff',
  backgroundColor: 'transparent',
  ':hover': { color: '#FF5500', backgroundColor: 'transparent' },
  borderRadius: '50%',
  fontSize: {
    xs: 20,
    sm: 25,
    md: 30,
    lg: 35,
    xl: 40,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <IconButton
      disableRipple
      onClick={() => onClick()}
      sx={iconLeftButtonStyles}
    >
      <KeyboardArrowLeftIcon sx={iconStyles} />
    </IconButton>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <IconButton
      disableRipple
      onClick={() => onClick()}
      sx={iconRightButtonStyles}
    >
      <KeyboardArrowRightIcon sx={iconStyles} />
    </IconButton>
  );
};

export { CustomLeftArrow, CustomRightArrow };
