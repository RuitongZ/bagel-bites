import React from 'react';
import { useState } from 'react';

import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

const subscribeBtn = {
  paddingX: { xs: '40px', sm: '30', md: '40px' },
  backgroundColor: '#000',
  textTransform: 'none',
  fontSize: { md: 16, lg: 18, xl: 20 },
  height: '50px',
  borderRadius: '0 5px 5px 0',
  ':hover': {
    backgroundColor: '#000',
    color: '#FF5500',
  },
};

const dialogTitleStyles = {
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Begild',
  color: '#FF5500',
  fontSize: {
    xs: '30px',
    sm: '32px',
    md: '36px',
    lg: '38px',
    xl: '42px',
  },
  paddingTop: { xs: '30px', sm: '40px', md: '50px' },
};

const dialogContentTextStyles = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#000',
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
  },
  paddingX: { xs: '20px', sm: '50px' },
};

const closeBtnStyles = {
  color: '#FF5500',
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '20px',
  },
  ':hover': {
    backgroundColor: 'transparent',
    color: '#000',
  },
};

export default function EmailScribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleSubmit(Event) {
    Event.preventDefault();
    if (validateEmail(email)) {
      setError('');
      setOpen(true);
      console.log('Valid Email:', email);
    } else {
      setError('*Please enter a valid email address...');
    }
  }

  function handelClose() {
    setOpen(false);
    setEmail('');
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
    >
      <TextField
        variant='filled'
        id='email-input'
        label={error ? error : '*Please enter your E-mail...'}
        type='emial'
        value={email}
        onChange={(Event) => setEmail(Event.target.value)}
        error={!!error}
        sx={{
          width: '100%',
          height: '50px',
          backgroundColor: '#fff',
          borderRadius: '5px 0 0 5px',
        }}
        InputProps={{
          style: {
            color: '#000',
            height: '50px',
          },
        }}
        InputLabelProps={{
          style: { color: '#404040' },
        }}
      />
      <Button
        disableRipple
        type='submit'
        variant='contained'
        disableElevation
        sx={subscribeBtn}
      >
        Subscribe
      </Button>
      <Dialog open={open} onClose={handelClose}>
        <DialogTitle sx={dialogTitleStyles}>Thank You!</DialogTitle>
        <DialogContent>
          <DialogContentText sx={dialogContentTextStyles}>
            Thank you for subscribing to our newsletter!
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '10px',
          }}
        >
          <Button onClick={handelClose} disableRipple sx={closeBtnStyles}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
