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
import { Link } from 'react-scroll';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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
    backgroundColor: '#000',
  },
});

const HamburgerBtn = styled(IconButton)({
  color: '#FF5500',
  paddingLeft: 0,
  ':hover': {
    color: '#000',
  },
});

const hamburgerBtnGridStyles = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  display: { xs: 'flex', sm: 'flex', md: 'none' },
};

const appBarStyles = {
  pl: { xs: '10px', sm: '20px', md: '30px' },
  pr: { xs: '10px', sm: '20px', md: '30px' },
  paddingTop: '5px',
};

const locationBtnStyles = {
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
};

const logoGridStyles = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px',
  justifyContent: {
    xs: 'center',
    sm: 'center',
    md: 'flex-start',
  },
};

const iconStyles = {
  fontSize: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 26,
    xl: 32,
  },
};

const menuGridStyles = {
  display: { xs: 'none', sm: 'none', md: 'flex' },
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const locationBtnGridStyles = {
  display: { xs: 'flex', sm: 'flex', md: 'none' },
  alignItems: 'center',
  justifyContent: 'flex-end',
};

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? '#fff' : 'transparent',
      transition: trigger ? '0.3s' : '0.5s',
    },
  });
}

export default function Header(props) {
  const [open, setOpen] = useState(false);

  const sections = [
    { id: 'our-bagels', label: 'Our Bagels' },
    { id: 'about', label: 'About' },
    { id: 'follow-us', label: 'Follow Us' },
  ];

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
          <ListItem key={section.id}>
            <ListItemButton
              disableRipple
              sx={{ padding: 0, ':hover': { backgroundColor: 'transparent' } }}
            >
              <Link
                activeClass='active'
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Typography
                  variant='h6'
                  color='#000'
                  sx={{
                    fontSize: { xs: 16, sm: 20 },
                    paddingLeft: '15px',

                    ':hover': { color: '#fff' },
                  }}
                >
                  {section.label}
                </Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Box
          sx={{ minHeight: '75vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <Typography
            variant='h6'
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
      <ElevationScroll {...props}>
        <TransparentAppBar elevation={0} sx={appBarStyles}>
          <Toolbar maxwidth='xl'>
            <Grid container columnSpacing={{ xs: 3, sm: 3, md: 2 }}>
              <Grid item xs={4} sm={4} sx={hamburgerBtnGridStyles}>
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
                  PaperProps={{
                    sx: {
                      backgroundColor: '#FF5500',
                      display: { xs: 'flex', sm: 'flex', md: 'none' },
                    },
                  }}
                >
                  {DrawerList}
                </Drawer>
              </Grid>

              <Grid item xs={4} sm={4} md={4} sx={logoGridStyles}>
                <Link
                  activeClass='active'
                  to='welcome'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: 'pointer' }}
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
                </Link>
              </Grid>

              <Grid item md={8} sx={menuGridStyles}>
                {sections.map((section) => (
                  <MenuButton
                    disableRipple
                    sx={{ fontSize: { md: 20, lg: 20, xl: 25 } }}
                    key={section.id}
                  >
                    <Link
                      activeClass='active'
                      to={section.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {section.label}
                    </Link>
                  </MenuButton>
                ))}

                <Link
                  activeClass='active'
                  to='location'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <LocationBtn sx={locationBtnStyles}>
                    <FmdGoodIcon sx={iconStyles} />
                  </LocationBtn>
                </Link>
              </Grid>

              <Grid item xs={4} sm={4} sx={locationBtnGridStyles}>
                <Link
                  activeClass='active'
                  to='location'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <LocationBtn>
                    <FmdGoodIcon fontSize='small' />
                  </LocationBtn>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </TransparentAppBar>
      </ElevationScroll>
    </>
  );
}
