import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Avatar, Box, Button, Container,
  CssBaseline, Grid, TextField, Typography,
  createTheme, ThemeProvider
} from '@mui/material';
import Copyright from '@/components/elements/copyright';
import GridLink from '@/components/elements/gridLink';
import icon from '@/assets/taugor-icon.jpeg';
import './style.css';
import loginUser from './login';

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState('');
  const uri = window.location.href.split('login')[0];

  const handleSubmit = async (event) => loginUser(event, setErrorMessage, navigate);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <img src={icon} alt="icon bussness" width={50} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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

            <Typography component="h6" variant="h6" color={'red'} fontSize={15}>
              {errorMessage}
            </Typography>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Entrar
            </Button>
            <Grid container justifyContent="space-between">
              <Grid>
                <GridLink link={uri + "forgot-password"} title="Esqueci minha senha" />
              </Grid>
              <Grid>
                <GridLink link={uri + "register"} title="Não possuo cadastro" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright link="#" title="Taugor Test" />
      </Container>
    </ThemeProvider>
  );
}