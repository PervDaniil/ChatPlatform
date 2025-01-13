import React, { createContext, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline, createTheme } from '@mui/material';


interface ThemeContextValue {
    mode: 'dark' | 'light',
    HandleThemeMode: () => void,
}

export const ThemeContext = createContext<ThemeContextValue>({ mode: 'dark', HandleThemeMode() {} });

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
            secondary: {
                main: '#666',
            },
            background: {
                paper: '#101010',
                default: '#0a0a0a',
            },
            text: {
                primary: '#ececec',
                secondary: '#777',
            },
            success: {
                main: '#00ff00'
            },
            error: {
                main: '#ff0000'
            },
        },
        typography: {
            fontFamily: 'Montserrat',
        },
    });

    return (
        <ThemeContext.Provider value={{ mode: themeMode, HandleThemeMode }}>
            <MUIThemeProvider theme={UserTheme}>
                <CssBaseline />
                { children } 
            </MUIThemeProvider>
        </ThemeContext.Provider>
    )
}