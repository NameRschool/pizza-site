import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from 'pizza-site/src/image/logo.jpg';  
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <img src={logo} alt="Logo" style={{ height: 40 }} />
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/">HomePage</Button>
        <Button color="inherit" component={Link} to="/my order">My Order</Button>
        <Button color="inherit" component={Link} to="/edit pizza">Edit Pizza</Button>
        <Button color="inherit" component={Link} to="/order display">Order Display</Button>
        <Button color="inherit" component={Link} to="/order management">Order Management</Button>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
