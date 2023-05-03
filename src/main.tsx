import '@fontsource/fira-sans'

import App from '@/App'
import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
