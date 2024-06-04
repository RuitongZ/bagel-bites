import React from 'react';

import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import BagelCarousel from '../components/Carousel';

const WrapBox = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  paddingLeft: 0,
  paddingRight: 0,
});

const OrangeContainer = styled(Container)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: '#FF5500',
  display: 'flex',
  justifyContent: 'center',
});

const contentBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100%',
  minHeight: '100vh',
  marginY: {
    xs: '30px',
    sm: '50px',
    md: '70px',
    lg: '90px',
    xl: '110px',
  },
};

const titleStyles = {
  fontSize: {
    xs: 30,
    sm: 35,
    md: 45,
    lg: 60,
    xl: 100,
  },
};

const sloganStyles = {
  color: '#fff',
  textShadow: {
    xs: '0.5px 0.5px 0px #000, -0.5px -0.5px 0px #000, 0.5px -0.5px 0px #000, -0.5px 0.5px 0px #000',
    sm: '0.8px 0.8px 0px #000, -0.8px -0.8px 0px #000, 0.8px -0.8px 0px #000, -0.8px 0.8px 0px #000',
    md: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
  },
  fontSize: { xs: 30, sm: 45, md: 55, lg: 65, xl: 75 },
  zIndex: 2,
  position: 'relative',
};

const carouselStyles = {
  width: '100%',
  pl: { xs: '10px', sm: '20px', md: '30px' },
  pr: { xs: '10px', sm: '20px', md: '30px' },
  position: 'relative',
  marginTop: '-70px',
};

export default function OurBagels() {
  return (
    <WrapBox>
      <OrangeContainer sx={{ mt: 0 }}>
        <Box sx={contentBox}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: '50px' }}>
            <Typography variant='h2' sx={titleStyles}>
              Our Bagels
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h3' sx={sloganStyles}>
              Classic & Delicious
            </Typography>
          </Box>

          <Box sx={carouselStyles}>
            <BagelCarousel />
          </Box>
        </Box>
      </OrangeContainer>
    </WrapBox>
  );
}
