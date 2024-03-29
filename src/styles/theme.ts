import { theme as DefaultTheme, extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: `'Fira Sans', ${DefaultTheme.fonts.heading}`,
  body: `'Fira Sans', ${DefaultTheme.fonts.body}`,
}

const colors = {
  brand: {
    dark: '#0d1117',
    softDark: '#161b22',
    border: '#21262d',
    light: '#e6edf3',
    blue: '#2f81f7',
    red: '#e53e3e',
  },
}

const breakpoints = {
  sm: '450px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const theme = extendTheme({ fonts, colors, breakpoints })
