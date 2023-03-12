import AppRouter from "../routes/AppRouter"
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const App = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const appTheme = createTheme(
        {
            typography: {
                fontFamily: [
                    'Roboto',
                    '"Noto Sans JP"',
                    '"Helvetica"',
                    'Arial',
                    'sans-serif',
                ].join(','),
            },
            palette: {
                primary: {
                    main: '#65b2c6',
                    light: '#98e4f9',
                    dark: '#308295'
                },
                secondary: {
                    main: '#d57276',
                    light: '#ffa2a5',
                    dark: '#a0444a'
                }
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            fontSize: '20px',
                        },
                    },
                },
            },
        }
    )
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline/>
            <AppRouter />
        </ThemeProvider>
    )
}

export default App