"use client"
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'

const ThemeProvider = ({ children }) => {

    const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#004370',
            },
            secondary: {
                main: '#191919',
            },
            text: {
                primary: '#404040',
                secondary: '#222222',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none', // Fix for Button text-transform
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: 'none', // Fix for Tab text-transform
                    },
                },
            },
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider