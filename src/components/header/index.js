import React from 'react';
import { isAuthenticated } from '@/config/auth';
import { Link } from 'react-router-dom';
import './style.css';

import {
  AppBar, Box,
  CssBaseline, Typography,
  createTheme, ThemeProvider, Toolbar, List, ListItem
} from '@mui/material';
import BasicMenu from './menuUser';


const theme = createTheme();

function Header() {
  const url = window.location.href.split('/');
  const uri = url[0] + url[2];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              backgroundColor: '#fff',
              height: 1,
              justifyContent:'flex-start'
            }}
          >

            <Typography
              component="h6"
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, color: '#000',fontSize: 13 }}
            >
              Taugor Teste
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'row'}}>
              <ListItem sx={{width:80}}>
                <Link className="linkItem" to={uri + "/"}>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ mr: '10px', width: '200px', fontSize: 12, color: 'rgb(25 118 210)' }}
                  >
                    Início
                  </Typography>
                </Link>
              </ListItem>

              <ListItem sx={{width:120}}>
                <Link className="linkItem" to={uri + "/employees"}>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ mr: '10px', width: '200px', fontSize: 12, color: 'rgb(25 118 210)' }}
                  >
                    Funcionários
                  </Typography>
                </Link>
              </ListItem>
              <ListItem sx={{width:150}}>
                <Link className="linkItem" to={uri + "/employees-inactivated"}>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ mr: '10px', width: '200px', fontSize: 12, color: 'rgb(25 118 210)' }}
                  >
                    Funcionários inativados
                  </Typography>
                </Link>
              </ListItem>
              {/* <ListItem sx={{width:120}}>
                <Link className="linkItem" to={uri + "/employees/create"}>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ color: '#000', mr: '10px', width: '200px', fontSize: 12, color: 'rgb(25 118 210)' }}
                  >
                    Novo funcionário
                  </Typography>
                </Link>
              </ListItem> */}
            </List>
            {
              isAuthenticated
              ? <BasicMenu />
              : <Link to={"login"}>Faça login</Link>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>

  );
}

export default Header;