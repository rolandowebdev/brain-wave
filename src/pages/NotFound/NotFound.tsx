import { Button, Center, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Center
      as="main"
      display="flex"
      height="100vh"
      flexDir="column"
      gap={4}
      justifyContent="center"
      alignItems="center">
      <Heading as="h1" fontSize="9xl" lineHeight="1">
        404
      </Heading>
      <Text as="p" fontSize="xl">
        Sorry, theres nothing here😢
      </Text>
      <Button
        onClick={() => navigate('/')}
        colorScheme="green"
        size="lg"
        fontWeight="normal">
        Back to home page
      </Button>
    </Center>
  )
}
