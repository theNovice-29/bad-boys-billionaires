import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000'  // Dark black background
        },
        primary: {
            main: '#ffffff',  // Ensuring text and icons are visible
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',  // Making the AppBar transparent
                    boxShadow: 'none',  // Removing any shadows to enhance the transparent effect
                }
            }
        }
    }
});

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
