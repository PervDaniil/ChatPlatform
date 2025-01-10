import React, { createContext, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline, createTheme } from '@mui/material';


interface ThemeContextValue {
    mode: 'dark' | 'light',
    HandleThemeMode: () => void,
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

    const HandleThemeMode = () => {
        setThemeMode(mode => mode === 'dark' ? 'light' : 'dark');
    }

    const UserTheme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#0095f6',
            },
            background: {
                paper: '#000000',
                default: '#0a0a0a',
            },
            text: {
                secondary: '#777',
            }
        },
        typography: {
            fontFamily: 'Montserrat'
        }
    });

    return (
        <ThemeContext.Provider value={{ mode: themeMode, HandleThemeMode}}>
            <MUIThemeProvider theme={UserTheme}>
                <CssBaseline />
                { children } 
            </MUIThemeProvider>
        </ThemeContext.Provider>
    )
}