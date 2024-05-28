import React from 'react';

import BrandLogo from '../data/logo&icons/Logo-02.png';

import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import BagelCarousel from '../components/Carousel';
import zIndex from '@mui/material/styles/zIndex';

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

const wrapBoxStyles = {
  paddingLeft: 0,
  paddingRight: 0,
  mt: {
    xs: '0px',
    sm: '-120px',
    md: '-145px',
    lg: '-160px',
    xl: '-240px',
  },
};

const brandLogoStyles = {
  pl: { xs: '40px', sm: '70px', md: '100px', lg: '140px', xl: '160px' },
  pr: { xs: '40px', sm: '70px', md: '100px', lg: '140px', xl: '160px' },
  display: {
    xs: 'none',
    sm: 'block',
    md: 'block',
    lg: 'block',
    xl: 'block',
  },
  width: '100%',
  height: 'auto',
};

const orangeContainerOffset = {
  mt: {
    xs: 0,
    sm: '-18px',
    md: '-28px',
    lg: '-40px',
    xl: '-50px',
  },
};

const contentBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100%',
  minHeight: '100vh',
  marginY: '100px',
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
  textShadow:
    '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
  fontSize: { xs: 30, sm: 45, md: 55, lg: 65, xl: 75 },
  zIndex: 2,
  position: 'relative',
};

const carouselStyles = {
  width: '100%',
  // paddingLeft: '200px',
  // paddingRight: '200px',
  marginLeft: '100px',
  marginRight: '100px',
  position: 'relative',
  marginTop: '-70px',
};

export default function OurBagels() {
  return (
    <WrapBox sx={wrapBoxStyles}>
      <Box
        component='img'
        src={BrandLogo}
        alt='Brand logo'
        sx={brandLogoStyles}
      />
      <OrangeContainer sx={orangeContainerOffset}>
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
