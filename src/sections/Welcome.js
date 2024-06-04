import React from 'react';

import WelcomeImg from '../data/img/bgImg/welcome.jpg';
import BrandLogo from '../data/logo&icons/Logo-03.png';
import BrandLogoCut from '../data/logo&icons/Logo-02.png';

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

const TextGridStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  minWidth: '100%',
  minHeight: { xs: '50vh', sm: '100vh' },
};

const grid1Styles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: {
    xs: '250px',
    sm: '350px',
    md: '300px',
    lg: '320px',
    xl: '500px',
  },
};

const grid2Styles = {
  display: 'flex',
  justifyContent: 'center',
};

const grid3Styles = {
  display: {
    xs: 'flex',
    sm: 'none',
  },
  justifyContent: 'center',
};

const grid4Styles = {
  display: {
    xs: 'none',
    sm: 'flex',
  },
  justifyContent: 'center',
};

const welcomeStyles = {
  height: {
    xs: '40px',
    sm: '70px',
    md: '75px',
    lg: '70px',
    xl: '100px',
  },
  color: '#fff',
  fontSize: { xs: 60, sm: 80, md: 100, lg: 110, xl: 150 },
};

const verticalLineStyles = {
  height: {
    xs: '90px',
    sm: '110px',
    md: '120px',
    lg: '100px',
    xl: '180px',
  },
  borderLeft: 1,
  borderColor: '#fff',
};

const smLogoStyles = {
  pl: { xs: '40px' },
  pr: { xs: '40px' },
  width: '100%',
  height: 'auto',
};

const lgLogoStyles = {
  pl: { xs: '60px' },
  pr: { xs: '60px' },
  width: '100%',
  height: 'auto',
};

export default function Welcome() {
  return (
    <BackgroundContainer>
      <ColorFilter>
        <Grid container spacing={3} sx={TextGridStyles}>
          <Grid //welcome
            item
            xs={12}
            sx={grid1Styles}
          >
            <Typography variant='h3' sx={welcomeStyles}>
              Welcome
            </Typography>
          </Grid>

          <Grid //line
            item
            xs={12}
            sx={grid2Styles}
          >
            <Box component='span' sx={verticalLineStyles} />
          </Grid>

          <Grid //Bagel Bites
            item
            xs={12}
            sx={grid3Styles}
          >
            <Box
              component='img'
              src={BrandLogo}
              alt='Brand logo'
              sx={smLogoStyles}
            />
          </Grid>

          <Grid //Bagel Bites
            item
            xs={12}
            sx={grid4Styles}
          >
            <Box
              component='img'
              src={BrandLogoCut}
              alt='Bagel Bites'
              sx={lgLogoStyles}
            />
          </Grid>
        </Grid>
      </ColorFilter>
    </BackgroundContainer>
  );
}
