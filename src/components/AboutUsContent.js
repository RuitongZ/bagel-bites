import React from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Hightlight = styled('span')({
  color: '#FF5500',
  fontWeight: 'bold',
});

export default function AboutUsContent() {
  return (
    <Typography
      variant='h5'
      color='#fff'
      sx={{
        textAlign: 'center',
        fontSize: { xs: 16, sm: 18, md: 20, lg: 24, xl: 30 },
      }}
    >
      Welcome to <Hightlight>Bagel Bites</Hightlight>, your destination for{' '}
      <Hightlight>fresh & delicious</Hightlight> bagels! We use only the{' '}
      <Hightlight>finest ingredients</Hightlight> to create a variety of bagels,
      from classic plain to everything. Pair with our rich spreads or try a
      gourmet bagel sandwich. Whether for breakfast or lunch, enjoy quality,
      taste, and a warm atmosphere. Experience bagel bliss today!
    </Typography>
  );
}
