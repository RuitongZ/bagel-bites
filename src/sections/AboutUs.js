import React from 'react';

import AboutUsContent from '../components/AboutUsContent';

import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const WrapBox = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  paddingLeft: 0,
  paddingRight: 0,
});

const BlackContainer = styled(Container)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
});

export default function AboutUs() {
  return (
    <WrapBox>
      <BlackContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh',
          }}
        >
          <Box
            sx={{ display: 'flex', justifyContent: 'center', height: '50px' }}
          >
            <Typography
              variant='h2'
              color='#fff'
              sx={{
                fontSize: {
                  xs: 30,
                  sm: 35,
                  md: 45,
                  lg: 60,
                  xl: 100,
                },
              }}
            >
              About Us
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pl: { xs: 5, sm: 12, md: 16, lg: 20, xl: 40 },
              pr: { xs: 5, sm: 12, md: 16, lg: 20, xl: 40 },
              pt: {
                xs: '40px',
                sm: '60px',
                md: '80px',
                lg: '100px',
                xl: '120px',
              },
            }}
          >
            <AboutUsContent />
          </Box>
        </Box>
      </BlackContainer>
    </WrapBox>
  );
}
