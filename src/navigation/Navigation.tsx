//mport React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, CssBaseline, useTheme, useMediaQuery, makeStyles } from '@mui/material';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
//import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';


export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
      <AppBar position="static" style={{backgroundColor: '#171229'}}>
        <CssBaseline />
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CodeTwoToneIcon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                  React App
            </Typography>
            {isMobile ? (
              <DrawerComponent/>
            ) : (
              <Stack direction='row' spacing={2}>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button className='button-navbar'><Typography color="common.white">Home</Typography></Button>
              </Link>
              <Link to='/about' style={{ textDecoration: 'none' }}>
                <Button className='button-navbar'><Typography color="common.white">About</Typography></Button>
              </Link>
              <Link to='/policy' style={{ textDecoration: 'none' }}>
                <Button className='button-navbar'><Typography color="common.white">Policy</Typography></Button>
              </Link>
              <Link to='/firstLesson' style={{ textDecoration: 'none' }}>
                <Button className='button-navbar'><Typography color="common.white">Lesson1</Typography></Button>
              </Link>
            </Stack>
            )}
        </Toolbar>
      </AppBar>
  )
}
