import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Pizza Shop© {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" href="contact@pizzashop.com">
            Pizza Shop
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
