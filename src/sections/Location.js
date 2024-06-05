import React from 'react';

import StoreImg from '../data/img/bgImg/store.jpg';

import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const OrangeContainer = styled(Container)({
  minWidth: '100%',
  minHeight: 'auto',
  backgroundColor: '#FF5500',
  display: 'flex',
  paddingLeft: 0,
  paddingRight: 0,
});

const containerDisplayStyles = {
  flexDirection: {
    xs: 'column',
    sm: 'row',
  },
};

const imgStyles = {
  width: {
    xs: '100%',
    sm: '50%',
  },
  height: '100vh',
  objectFit: 'cover',
  borderRadius: {
    xs: '100px 0 0 0',
    sm: '140px 0 0 0',
    md: '150px 0 0 0',
    lg: '200px 0 0 0',
    xl: '250px 0 0 0',
  },
};

const contentBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  pl: '70px',
  pr: '50px',
  my: '70px',
};

const titleStyles = {
  pb: '10px',
  fontSize: {
    xs: 20,
    sm: 25,
    md: 30,
    lg: 38,
    xl: 45,
  },
};

const textStyles = {
  textDecoration: 'underline',
  textUnderlineOffset: '1px',
  textDecorationThickness: '1px',
  fontSize: {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 30,
  },
};

export default function Location() {
  return (
    <OrangeContainer disableGutters sx={containerDisplayStyles}>
      <Box
        component='img'
        src={StoreImg}
        alt='Store environment'
        sx={imgStyles}
      />

      <Box sx={contentBoxStyles}>
        <Typography variant='h2' sx={titleStyles}>
          Our Location
        </Typography>
        <Typography variant='h5' sx={{ pb: '50px', ...textStyles }}>
          330 Richmond street, Toronto, ON, M4B 0B2
        </Typography>
        <Typography variant='h2' sx={titleStyles}>
          Open Hours
        </Typography>
        <Typography variant='h5' sx={{ pb: '10px', ...textStyles }}>
          Mon - Fri: 9:00a.m. - 7:00p.m.
        </Typography>
        <Typography variant='h5' sx={textStyles}>
          Sat - Sun: 10:00a.m. - 7:00p.m.
        </Typography>
      </Box>
    </OrangeContainer>
  );
}
