import React from 'react';

import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopBtn = styled(IconButton)({
  backgroundColor: '#000',
  borderRadius: '50%',
  right: '30px',
  bottom: '60px',
  ':hover': { backgroundColor: '#fff' },
  width: {
    xs: '30px',
    xl: '60px',
  },
  height: {
    xs: '30px',
    xl: '60px',
  },
});

const iconStyles = {
  color: '#fff',
  backgroundColor: 'transparent',
  ':hover': { color: '#FF5500', backgroundColor: 'transparent' },
  borderRadius: '50%',
  fontSize: {
    xs: 30,
    sm: 30,
    md: 30,
    lg: 30,
    xl: 40,
  },
};
export default function ScrollToTop() {
  return (
    <Box
      sx={{
        position: 'sticky',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <ScrollToTopBtn>
        <KeyboardArrowUpIcon sx={iconStyles} />
      </ScrollToTopBtn>
    </Box>
  );
}
