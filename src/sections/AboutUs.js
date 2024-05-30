import React from 'react';

import AboutUsContent from '../components/AboutUsContent';
import Creamcheese from '../data/img/creamcheese.png';
import Butter from '../data/img/butter.png';

import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlackContainer = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
});

const wrapBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  width: '100%',
};

const titleStytles = {
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
        <Box
          sx={{
            width: '30%',
            marginTop: '400px',
            position: 'relative',
            left: '-50px',
            bottom: '50px',
          }}
        >
          <img
            src={Creamcheese}
            alt='creamcheese'
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>

        <Box sx={wrapBox}>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', height: '50px' }}
          >
            <Typography variant='h2' color='#fff' sx={titleStytles}>
              About Us
            </Typography>
          </Box>

          <Box sx={contentBox}>
            <AboutUsContent />
          </Box>
        </Box>

        <Box sx={{ width: '30%', marginTop: '100px' }}>
          <img
            src={Butter}
            alt='butter'
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </BlackContainer>
  );
}
