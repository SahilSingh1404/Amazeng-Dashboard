'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from "../Navlog"
import './reset_password.css'

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Nav/>
      <Container component="main" maxWidth="500px">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3" sx={{fontFamily: 'Roboto',marginTop:'30px' }}>
            Reset Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,alignItems:'centre' }}>
          <Typography sx={{
                      color: '#696F79',
                      fontSize: '20px',
                      fontWeight: '400',
                      marginBottom: '0.5em',
                      marginTop: '1em'
                    }}>Enter New Password*</Typography>
                    <TextField
                      type='password'
                      sx={{width:'360px',
                    height:'90px'}}
                      required
                    />
            <Typography sx={{
                      color: '#696F79',
                      fontSize: '20px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Re-Enter New Password*</Typography>
                    <TextField
                      type='password'
                      sx={{width:'360px',
                    height:'90px'}}
                      required
                    /><br/>
            <button
                      className="btn"
                      type="submit"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      <Link href='../' style={{textDecoration:'none',color:'white'}}>
              Submit
              </Link>
                    </button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}