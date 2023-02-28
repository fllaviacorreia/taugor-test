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

import Copyright from '@/components/copyright';

import GridLink from '@/components/gridLink';

import icon from '@/assets/taugor-icon.jpeg';

import './style.css';

const theme = createTheme();

export default function ForgotPassword() {
  const uri = window.location.href.split('forgot-password')[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <img src={icon} alt="icon bussness" width={50} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recuperar senha
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate
            sx={{
              marginTop: 1,
              alignItems: 'center',
              justifyContent: "center"
            }}>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar email
            </Button>

            <Grid container justifyContent="flex-end">
              <GridLink link={uri + "login"} title="Cancelar" />
            </Grid>
          </Box>

        </Box>
        <Copyright link="#" title="Taugor Test" />
      </Container>
    </ThemeProvider>
  );
}
