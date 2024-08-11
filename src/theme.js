import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BA3F1D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#A48669',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#BA3F1D',
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      color: '#A48669',
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      color: '#333333',
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      color: '#BA3F1D',
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    subtitle1: {
      color: '#666666',
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      color: '#BA3F1D',
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body1: {
      color: '#333333',
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      color: '#666666',
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
    },
    },
      components: {
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontWeight: 700, 
        },
      },
    },
  },

});

export default theme;
