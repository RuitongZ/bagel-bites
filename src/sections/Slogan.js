import React from 'react';

import BagelImg from '../data/img/bgImg/bagel.jpg';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Box)({
  minWidth: '100%',
  backgroundImage: `url(${BagelImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Slogan() {
  return (
    <BackgroundContainer
      sx={{ height: { xs: 150, sm: 200, md: 250, lg: 300, xl: 350 } }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography
          variant='h2'
          color='#fff'
          sx={{
            fontSize: {
              xs: 30,
              sm: 45,
              md: 60,
              lg: 75,
              xl: 100,
            },
          }}
        >
          Freshly baked everyday
        </Typography>
        <Typography
          variant='h4'
          color='#fff'
          sx={{
            fontWeight: '800',
            fontSize: {
              xs: 30,
              sm: 45,
              md: 60,
              lg: 75,
              xl: 100,
            },
          }}
        >
          !
        </Typography>
      </Box>
    </BackgroundContainer>
  );
}
