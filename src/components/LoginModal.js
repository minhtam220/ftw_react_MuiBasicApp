import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal() {
  const { login, loginModalOpen, setLoginModalOpen } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    login();
    setLoginModalOpen(false);
  };

  return (
    <Modal
      open={loginModalOpen}
      onClose={() => setLoginModalOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Box
          sx={{
            //marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
          }}
        >
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>
          <Box component='form' validate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value='tam@coderschool.com'
              autoFocus
              sx={{
                color: 'white',
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value='tam@coderschool.com'
              sx={{
                color: 'white',
              }}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
