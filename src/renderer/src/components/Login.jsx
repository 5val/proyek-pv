import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Button, Box, Typography, TextField } from '@mui/material';
import { AuthContext } from '../context/Auth';

function Login() {
   const [inpEmail, setInpEmail] = useState('')
   const [inpPass, setInpPass] = useState('')
   const {login, loginErr} = useContext(AuthContext)
   const navigate = useNavigate()

   function handleLogin() {
      const sukses = login(inpEmail, inpPass)
      if(sukses) {
         navigate('/home')
      }
   }

  return (
    <>
         <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 8,
        }}
      >
        <Typography variant="h5">LOGIN</Typography>

        <Box
          component="form"
          sx={{
            mt: 1,
            width: '100%',
          }}
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpEmail}
            onChange={(e) => setInpEmail(e.target.value)}
          />
          
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpPass}
            onChange={(e) => setInpPass(e.target.value)}
          />
          {loginErr !== '' && (
            <Typography variant="h5" sx={{color: 'red', textAlign: 'center'}}>{loginErr}</Typography>
          )}
          
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#00b94e',
              '&:hover': { backgroundColor: '#009e3f' },
              mt: 2,
              padding: '10px',
            }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Belum punya akun?{' '}
              <NavLink to="/signup" style={{ textDecoration: 'none', color: '#00b94e' }}>
                Daftar Sekarang
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default Login