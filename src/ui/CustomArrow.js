import React from 'react';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const iconLeftButtonStyles = {
  position: 'absolute',
  left: '0%',
  top: '50%',
  backgroundColor: '#000',
  borderRadius: '50%',
  ':hover': { backgroundColor: '#fff' },
  width: {
    xs: '40px',
    xl: '60px',
  },
  height: {
    xs: '40px',
    xl: '60px',
  },
  zIndex: 1,
};

const iconRightButtonStyles = {
  position: 'absolute',
  right: '0%',
  top: '50%',
  backgroundColor: '#000',
  borderRadius: '50%',
  ':hover': { backgroundColor: '#fff' },
  width: {
    xs: '40px',
    xl: '60px',
  },
  height: {
    xs: '40px',
    xl: '60px',
  },
  zIndex: 1,
};

const iconStyles = {
  color: '#fff',
  backgroundColor: 'transparent',
  ':hover': { color: '#FF5500', backgroundColor: 'transparent' },
  borderRadius: '50%',
  fontSize: {
    xs: 30,
    sm: 35,
    md: 35,
    lg: 35,
    xl: 40,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
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
