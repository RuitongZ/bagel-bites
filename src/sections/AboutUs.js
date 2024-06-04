import React from 'react';

import AboutUsContent from '../components/AboutUsContent';

import Creamcheese from '../data/img/bgImg/creamcheese.png';
import Butter from '../data/img/bgImg/butter.png';

import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlackContainer = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
});

const img1BoxStyles = {
  width: '30%',
  position: 'relative',
  left: '-30px',
  top: { xs: '70%', sm: '65%', md: '55%', lg: '50%', xl: '50%' },
};

const img2BoxStyles = {
  width: '30%',
  position: 'relative',
  top: '20%',
};

const imgStyles = {
  width: '100%',
  height: 'auto',
};

const contentWrapBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  width: '100%',
};

const titleStytles = {
  color: '#fff',
  fontSize: {
    xs: 30,
    sm: 35,
    md: 45,
    lg: 60,
    xl: 100,
  },
};

const contentBox = {
  display: 'flex',
  justifyContent: 'center',
  pt: {
    xs: '40px',
    sm: '60px',
    md: '80px',
    lg: '100px',
    xl: '120px',
  },
};

export default function AboutUs() {
  return (
    <BlackContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={img1BoxStyles}>
          <img src={Creamcheese} alt='creamcheese' style={imgStyles} />
        </Box>

        <Box sx={contentWrapBox}>
          <Box>
            <Typography variant='h2' sx={titleStytles}>
              About Us
            </Typography>
          </Box>

          <Box sx={contentBox}>
            <AboutUsContent />
          </Box>
        </Box>

        <Box sx={img2BoxStyles}>
          <img src={Butter} alt='butter' style={imgStyles} />
        </Box>
      </Box>
    </BlackContainer>
  );
}
