import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BA3F1D ', 
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#A48669', 
    },
    // הגדר צבעים נוספים כמו error, warning, info וכו'
  },

});

export default theme;
