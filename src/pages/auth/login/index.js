import * as React from 'react';

import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import firebase from '@/config/firebase';
import Copyright from '@/components/copyright';

import GridLink from '@/components/gridLink';

import icon from '@/assets/taugor-icon.jpeg';

import './style.css';

const theme = createTheme();

export default function Login() {
  // const auth = getAuth(firebase);
  console.log("api_key",process.env.REACT_APP_API_KEY)
  const uri = window.location.href.split('login')[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={ theme }>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
            <img src={ icon } alt="icon bussness" width={ 50 } />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Seu e-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Sua senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={ { mt: 3, mb: 2 } }
            >
              Entrar
            </Button>
            <Grid container justifyContent="space-between">
              <Grid>
                <GridLink link={uri+"forgot-password"} title="Esqueci minha senha" />
              </Grid>
              <Grid>
                <GridLink link={uri+"register"} title="Não possuo cadastro" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright link="#" title="Taugor Test" />
      </Container>
    </ThemeProvider>
  );
}
