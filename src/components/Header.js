import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpeg';  
function Header() {
  console.log("Header component loaded");  

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <img src={logo} alt="Logo" style={{ height: 55 }} />
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/">HomePage</Button>
        <Button color="inherit" component={Link} to="/my order">My Order</Button>
        <Button color="inherit" component={Link} to="/edit pizza">Edit Pizza</Button>
        <Button color="inherit" component={Link} to="/order display">Order Display</Button>
        <Button color="inherit" component={Link} to="/order management">Order Management</Button>
        <Button color="inherit" component={Link} to="/about">about</Button>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
