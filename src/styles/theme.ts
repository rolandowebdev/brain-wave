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
    primary: '#2f81f7',
    secondary: '#238636',
  },
}

export const theme = extendTheme({ fonts, colors })
