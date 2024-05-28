import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'FontOne, AmericanaStd, serif',
    h2: {
      fontFamily: 'FontTwo, Begild, serif',
    },
    h3: {
      fontFamily: 'FontThree, Helena signature, serif',
    },
    h4: {
      fontFamily: 'FontFour, Bauer Bodoni Std 2, serif',
    },
  },
});

export default theme;
