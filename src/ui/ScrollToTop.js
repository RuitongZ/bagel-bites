import React from 'react';

// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';

const iconStyles = {
  boxShadow: 'none',
  position: 'fixed',
  bottom: 20,
  right: 20,
  color: '#fff',
  backgroundColor: '#000',
  '&:hover': { color: '#FF5500', backgroundColor: '#fff' },
  width: { xs: 40, sm: 45, md: 50, lg: 50, xl: 70 },
  height: { xs: 40, sm: 45, md: 50, lg: 50, xl: 70 },
};

export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        aria-label='scroll to top'
        disableRipple
        sx={iconStyles}
      >
        <KeyboardArrowUpIcon
          sx={{ fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40 } }}
        />
      </Fab>
    </Zoom>
  );
}
