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

import Copyright from '@/components/elements/copyright';

import GridLink from '@/components/elements/gridLink';

import icon from '@/assets/taugor-icon.jpeg';

import './style.css';
import { auth } from '@/config/firebase';

const theme = createTheme();

export default function ForgotPassword() {
  const uri = window.location.href.split('forgot-password')[0];

  const [message, setMessage] = React.useState({ messageUser: '', error: false, });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');

    if (!email) {
      setMessage({ messageUser: "E-mail e/ou senha não preenchidos.", error: true });
    } else {
      setMessage({ messageUser: '', error: false })
      await auth.sendPasswordResetEmail(email)
        .then(function () {
          setMessage({
            messageUser: 'Verifique seu email.',
            error: false
          });

        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setMessage({ messageUser: error.code, error: true });
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Grid sx={{display:'flex',flexDirection:'column', alignItems:'center'}}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <img src={icon} alt="icon bussness" width={50} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recuperar conta
          </Typography>
          </Grid>
          
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
            <Typography component="h6" variant="h6" color={message.error ? 'red' : 'green'} fontSize={15}>
              {message.messageUser}
            </Typography>
            <Button type="submit" fullWidth variant="contained"sx={{ mt: 3, mb: 2 }}>
              Enviar email
            </Button>
          </Box>
          
        </Box>
        <Grid container justifyContent="space-between">
              <Grid>
                <GridLink link={uri + "login"} title="Cancelar" />
              </Grid>
            </Grid>
        <Copyright link="#" title="Taugor Test" />
      </Container>
    </ThemeProvider>
  );
}
