import { Box, Container } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Dashboard,
  Description,
  NotFound,
  Quiz,
  ResetPassword,
  Result,
  SignIn,
  SignUp,
} from '@/pages'
import { PrivateRoutes } from '@/routes'

export const App = () => {
  return (
    <Box bg="brand.dark" minH="100vh" color="brand.light">
      <Container maxW="4xl" sx={{ minH: 'calc(100vh - 64px)' }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoutes>
                  <Dashboard />
                </PrivateRoutes>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route
              path="/:category"
              element={
                <PrivateRoutes>
                  <Description />
                </PrivateRoutes>
              }
            />
            <Route
              path="/:category/:quizName"
              element={
                <PrivateRoutes>
                  <Quiz />
                </PrivateRoutes>
              }
            />
            <Route
              path="/:category/:quizName/:resultQuizName"
              element={
                <PrivateRoutes>
                  <Result />
                </PrivateRoutes>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Box>
  )
}
