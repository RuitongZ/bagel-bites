import React from 'react';

import { Button, Box, Typography, TextField, colors } from '@mui/material';
import { styled } from '@mui/material/styles';

const OrangeContainer = styled(Box)({
  minWidth: '100%',
  minHeight: '50vh',
  backgroundColor: '#FF5500',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const FooterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  minWidth: '100%',
  marginBottom: '100px',
});

const footerBoxStyles = {
  flexDirection: { xs: 'column', sm: 'row' },
  paddingX: { xs: '30px', sm: '50px', md: '80px', lg: '100px' },
};

const menuBoxStyles = {
  display: 'flex',
  flexDirection: { xs: 'row', sm: 'column', md: 'column' },
  alignItems: 'flex-start',
  width: { xs: '100%', sm: '100%', md: '50%' },
};

const MenuBtn = styled(Button)({
  color: '#000',
  textTransform: 'none',
  ':hover': {
    backgroundColor: 'transparent',
  },
});

const subscribeBtn = {
  backgroundColor: '#000',
  textTransform: 'none',
  fontSize: { md: 16, lg: 18, xl: 20 },
  height: '50px',
  width: '150px',
  borderRadius: '0 5px 5px 0',
  ':hover': {
    backgroundColor: '#000',
    color: '#FF5500',
  },
};

const copyrightStyles = {
  fontSize: {
    xs: 8,
    sm: 8,
    md: 10,
    lg: 12,
    xl: 14,
  },
  marginBottom: '20px',
};

export default function Footer() {
  const footerMenu1 = ['FQAs', 'Teams', 'Our Bagels'];
  const footerMenu2 = ['Contact', 'About Us', 'Reviews & Press'];
  return (
    <OrangeContainer>
      <FooterBox sx={footerBoxStyles}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
            width: { xs: '100%', sm: '100%', md: '50%' },
            gap: { xs: '10px', sm: 0, md: '50px' },
          }}
        >
          <Box sx={menuBoxStyles}>
            {footerMenu1.map((menu) => (
              <MenuBtn
                disableRipple
                key={menu}
                sx={{
                  fontSize: { md: 15, lg: 20, xl: 25 },
                  paddingRight: { xs: '50px' },
                }}
              >
                {menu}
              </MenuBtn>
            ))}
          </Box>

          <Box sx={menuBoxStyles}>
            {footerMenu2.map((menu) => (
              <MenuBtn
                disableRipple
                key={menu}
                sx={{
                  fontSize: { md: 15, lg: 20, xl: 25 },
                  paddingRight: { xs: '50px' },
                }}
              >
                {menu}
              </MenuBtn>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', sm: '100%', md: '50%', lg: '60%' },
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <Box>
            <Typography variant='h6'>
              Subscribe to our newsletter today!
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <TextField
                variant='filled'
                id='demo-helper-text-misaligned-no-helper'
                label='*Please enter your E-mail...'
                type='emial'
                sx={{
                  width: '100%',
                  height: '50px',
                  backgroundColor: '#fff',
                  borderRadius: '5px 0 0 5px',
                }}
                InputProps={{
                  style: {
                    height: '50px',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#000' },
                }}
              />
              <Button
                disableRipple
                variant='contained'
                disableElevation
                sx={subscribeBtn}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </FooterBox>
      <Typography variant='h6' sx={copyrightStyles}>
        &#169; Bagel Bites. All rights reserve.
      </Typography>
    </OrangeContainer>
  );
}
