import { theme as DefaultTheme, extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: `'Noto Sans', ${DefaultTheme.fonts.heading}`,
  body: `'Noto Sans', ${DefaultTheme.fonts.body}`,
}

const colors = {
  brand: {
    dark: '#181823',
    light: '#F0F0F0',
    primary: '#19A7CE',
  },
}

export const theme = extendTheme({ fonts, colors })
