import { ThemeProvider as MUIThemeProvider, CssBaseline, createTheme } from '@mui/material';
import React, { createContext, useState } from 'react';
import { ThemeContextProviderValue } from './types.ts';


export const ThemeContext = createContext<ThemeContextProviderValue>({ 
    mode: 'dark',
    HandleThemeMode() {} 
});

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
                paper: themeMode === 'dark' ? '#101010' : '#eee',
                default: themeMode === 'dark' ? '#0a0a0a' : '#fff',
            },
            text: {
                primary: themeMode === 'dark' ? '#ececec' : '#000',
                secondary: themeMode === 'dark' ? '#777' : '#999',
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