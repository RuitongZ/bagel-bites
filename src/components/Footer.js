import React from 'react';

import EmailScribeForm from '../ui/EmailSubscribeForm';

import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const OrangeContainer = styled(Box)({
  minWidth: '100%',
  backgroundColor: '#FF5500',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const footerBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  minWidth: '100%',
  flexDirection: { xs: 'column', sm: 'row' },
  padding: { xs: '40px', sm: '50px', md: '60px', lg: '80px' },
};

const menuBoxStyles = {
  display: 'flex',
  flexDirection: { xs: 'row', sm: 'column' },
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: { xs: '100%', sm: '25%' },
};

const menuBtn = {
  color: '#000',
  textTransform: 'none',
  ':hover': {
    backgroundColor: 'transparent',
  },
  padding: 0,
  pb: '10px',
  fontSize: { xs: 12, sm: 12, md: 15, lg: 20, xl: 25 },
  justifyContent: 'flex-start',
};

const subscribeBox = {
  width: { xs: '100%', sm: '60%' },
  paddingLeft: { xs: 0, sm: '50px', md: '100px', lg: '200px' },
  mt: { xs: 4, sm: 0 },
};

const subTypo = {
  fontSize: { xs: 14, sm: 12, md: 15, lg: 20, xl: 25 },
  mb: 1,
  display: 'flex',
  justifyContent: 'center',
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
      <Box sx={footerBoxStyles}>
        <Box sx={menuBoxStyles}>
          {footerMenu1.map((menu) => (
            <Button disableRipple key={menu} sx={menuBtn}>
              {menu}
            </Button>
          ))}
        </Box>

        <Box sx={menuBoxStyles}>
          {footerMenu2.map((menu) => (
            <Button disableRipple key={menu} sx={menuBtn}>
              {menu}
            </Button>
          ))}
        </Box>

        <Box sx={subscribeBox}>
          <Typography variant='h6' sx={subTypo}>
            Subscribe to our newsletter today!
          </Typography>

          <EmailScribeForm />
        </Box>
      </Box>

      <Typography variant='h6' sx={copyrightStyles}>
        &#169; Bagel Bites. All rights reserve.
      </Typography>
    </OrangeContainer>
  );
}
