import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, SignIn, SignUp } from '@/pages'
import { PrivateRoutes } from './routes'

const App = () => {
  return (
    <Box as="main" bg="brand.dark" minH="100vh" color="brand.light">
      <BrowserRouter>
        <Routes>
          <Route>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
