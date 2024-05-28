import React from 'react';

import WelcomeImg from '../data/img/welcome.jpg';
import BrandLogo from '../data/logo&icons/Logo-02.png';

import { Box, Typography, Grid } from '@mui/material';

import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundImage: `url(${WelcomeImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
  top: 0,
});

const ColorFilter = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  backgroundPosition: 'center top',
  top: 0,
});

export default function Welcome() {
  return (
    <BackgroundContainer>
      <ColorFilter>
        <Grid
          container
          spacing={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            minWidth: '100%',
            minHeight: '40vh',
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: {
                xs: '250px',
                sm: '350px',
                md: '300px',
                lg: '320px',
                xl: '500px',
              },
            }}
          >
            <Typography
              variant='h3'
              sx={{
                height: {
                  xs: '40px',
                  sm: '70px',
                  md: '75px',
                  lg: '70px',
                  xl: '90px',
                },
                color: '#fff',
                fontSize: { xs: 60, sm: 80, md: 100, lg: 110, xl: 140 },
              }}
            >
              Welcome
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component='span'
              sx={{
                height: {
                  xs: '90px',
                  sm: '110px',
                  md: '120px',
                  lg: '100px',
                  xl: '200px',
                },
                borderLeft: 1,
                borderColor: '#fff',
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: {
                xs: 'flex',
                sm: 'none',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
              justifyContent: 'center',
            }}
          >
            <Box
              component='img'
              src={BrandLogo}
              alt='Brand logo'
              sx={{
                pl: { xs: '60px' },
                pr: { xs: '60px' },
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </ColorFilter>
    </BackgroundContainer>
  );
}
