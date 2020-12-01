import { createMuiTheme } from '@material-ui/core/styles'
import { blue, brown, deepOrange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
        button: {
          fontSize: '1rem',
          margin: '5px 5px'
        },
    },
    palette: {
      primary: {
      light: brown[50],
      main: brown[500],  
      dark: brown[900],
      contrastText: '#fff',
    },
    secondary: {
        light: deepOrange[50],
        main: deepOrange[400],  
        dark: deepOrange[600],
      contrastText: '#000',
    },
      openTitle: '#3f4771',
      protectedTitle: brown['400'],
      type: 'light'
    }
})

export default theme