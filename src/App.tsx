import { Box, Container } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Description, Result, SignIn, SignUp } from '@/pages'
import { PrivateRoutes } from '@/routes'

const App = () => {
  return (
    <Box bg="brand.dark" minH="100vh" color="brand.light">
      <Container maxW="4xl" sx={{ minH: 'calc(100vh - 64px)' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <PrivateRoutes>
                    <Dashboard />
                  </PrivateRoutes>
                }
              />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route
                path="result"
                element={
                  <PrivateRoutes>
                    <Result />
                  </PrivateRoutes>
                }
              />
              <Route
                path=":category"
                element={
                  <PrivateRoutes>
                    <Description />
                  </PrivateRoutes>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </Box>
  )
}

export default App
