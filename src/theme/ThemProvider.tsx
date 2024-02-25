'use client'

import { ThemeProvider } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import React, { ReactNode } from 'react'

import { theme } from './schemes/theme'

export const ThemeProviderWrapper = (props: { children: ReactNode }) => {
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </StylesProvider>
    )
}
