import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Wrap,
} from '@chakra-ui/react'
import { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box as="main" bg="brand.dark" minH="100vh">
      <Container
        maxW="sm"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="brand.light"
        sx={{ minH: '100vh' }}>
        <Wrap align="center" justify="center" spacing={4}>
          <Heading as="h1" fontSize="4xl">
            Brain Wave
          </Heading>
          <Input placeholder="Username" />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                color="brand.dark"
                onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            bg="brand.primary"
            w="full"
            letterSpacing="wide"
            fontWeight="medium">
            Sign In
          </Button>
        </Wrap>
      </Container>
    </Box>
  )
}

export default App
