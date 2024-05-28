import React from 'react';
import { useState } from 'react';

import Logo from '../data/logo&icons/Logo-01.png';

import {
  AppBar,
  Grid,
  Toolbar,
  Box,
  List,
  Button,
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
  Drawer,
} from '@mui/material';
import { styled } from '@mui/system';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MenuIcon from '@mui/icons-material/Menu';

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  position: 'fixed',
});

const MenuButton = styled(Button)({
  my: 2,
  color: '#FF5500',
  display: 'block',
  textTransform: 'none',
  paddingRight: '40px',
  ':hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
    textDecorationThickness: '1px',
    backgroundColor: 'transparent',
  },
  ':active': {
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
    textDecorationThickness: '1px',
    backgroundColor: 'transparent',
  },
});

const LocationBtn = styled(IconButton)({
  color: '#000',
  backgroundColor: '#FF5500',
  borderRadius: '50%',
  ':hover': {
    color: '#FF5500',
    backgroundColor: '#fff',
  },
});

const HamburgerBtn = styled(IconButton)({
  color: '#FF5500',
  paddingLeft: 0,
  ':hover': {
    color: '#000',
  },
});

export default function Header() {
  const [open, setOpen] = useState(false);

  const sections = ['Our Bagels', 'About', 'Follow Us'];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: { xs: 150, sm: 200 } }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ marginTop: '15px' }}>
        {sections.map((section) => (
          <ListItem key={section}>
            <ListItemButton
              sx={{ padding: 0, ':hover': { backgroundColor: 'transparent' } }}
            >
              <Typography
                variant='H6'
                color='#000'
                sx={{
                  fontSize: { xs: 16, sm: 20 },
                  paddingLeft: '15px',

                  ':hover': { color: '#fff' },
                }}
              >
                {section}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
        <Box
          sx={{ minHeight: '75vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <Typography
            variant='H6'
            color='#fff'
            sx={{
              fontSize: { xs: 10, sm: 12 },
              paddingLeft: '30px',
            }}
          >
            &#169; Bagel Bites
          </Typography>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <TransparentAppBar
        elevation={0}
        sx={{
          pl: { xs: '10px', sm: '20px', md: '30px' },
          pr: { xs: '10px', sm: '20px', md: '30px' },
          mt: { xs: '10px', sm: '15px', md: '15px', lg: '20px', xl: '25px' },
        }}
      >
        <Toolbar maxwidth='xl'>
          <Grid
            container
            columnSpacing={{ xs: 3, sm: 3, md: 2 }}
            sx={{
              display: 'flex',
            }}
          >
            <Grid
              item
              xs={4}
              sm={4}
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: { xs: 'flex', sm: 'flex', md: 'none' },
              }}
            >
              <HamburgerBtn
                disableRipple
                size='large'
                aria-label='hamberger menu'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={toggleDrawer(true)}
              >
                <MenuIcon fontSize='large' />
              </HamburgerBtn>
              <Drawer
                anchor='left'
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: { backgroundColor: '#FF5500' } }}
              >
                {DrawerList}
              </Drawer>
            </Grid>

            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px',
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                },
              }}
            >
              <Box
                component='img'
                src={Logo}
                alt='Logo'
                sx={{
                  height: {
                    xs: '50px',
                    sm: '55px',
                    md: '60px',
                    lg: '65px',
                    xl: '70px',
                  },
                }}
              ></Box>
            </Grid>

            <Grid
              item
              md={8}
              sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              {sections.map((section) => (
                <MenuButton
                  disableRipple
                  key={section}
                  sx={{ fontSize: { md: 20, lg: 20, xl: 25 } }}
                >
                  {section}
                </MenuButton>
              ))}

              <LocationBtn
                sx={{
                  width: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '40px',
                    xl: '60px',
                  },
                  height: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '40px',
                    xl: '60px',
                  },
                }}
              >
                <FmdGoodIcon
                  sx={{
                    fontSize: {
                      xs: 16,
                      sm: 20,
                      md: 24,
                      lg: 26,
                      xl: 32,
                    },
                  }}
                />
              </LocationBtn>
            </Grid>

            <Grid
              item
              xs={4}
              sm={4}
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <LocationBtn>
                <FmdGoodIcon fontSize='small' />
              </LocationBtn>
            </Grid>
          </Grid>
        </Toolbar>
      </TransparentAppBar>
    </>
  );
}
