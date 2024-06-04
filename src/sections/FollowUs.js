import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramPost from '../components/InstagramPost';

import { Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlackContainer = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
});

const wrapBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100%',
  mt: { xs: '100px' },
};

const typographyStyles = {
  color: '#FF5500',
  fontSize: {
    xs: 30,
    sm: 35,
    md: 45,
    lg: 60,
    xl: 100,
  },
};

const iconButtonStyles = {
  color: '#FF5500',
  ':hover': { color: '#fff' },
};

const iconStyles = {
  width: {
    xs: '20px',
    sm: '20px',
    md: '25px',
    lg: '30px',
    xl: '35px',
  },
  height: {
    xs: '20px',
    sm: '20px',
    md: '25px',
    lg: '30px',
    xl: '35px',
  },
};

export default function FollowUs() {
  return (
    <BlackContainer>
      <Box sx={wrapBoxStyles}>
        <Box>
          <Typography variant='h2' sx={typographyStyles}>
            Follow Us
          </Typography>
        </Box>
        <Box>
          <IconButton
            aria-label='instagram'
            disableRipple
            sx={iconButtonStyles}
          >
            <InstagramIcon sx={iconStyles} />
          </IconButton>
          <IconButton
            aria-label='instagram'
            disableRipple
            sx={iconButtonStyles}
          >
            <FacebookIcon sx={iconStyles} />
          </IconButton>
          <IconButton
            aria-label='instagram'
            disableRipple
            sx={iconButtonStyles}
          >
            <TwitterIcon sx={iconStyles} />
          </IconButton>
        </Box>
        <Box sx={{ width: '100%', height: 'auto', mt: '50px', mb: '100px' }}>
          <InstagramPost />
        </Box>
      </Box>
    </BlackContainer>
  );
}
