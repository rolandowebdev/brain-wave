import '@fontsource/fira-sans'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/App'
import { AuthProvider } from '@/context'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle, theme } from '@/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <AuthProvider>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
)
