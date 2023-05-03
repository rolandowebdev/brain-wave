import { CustomInput, GithubLogo } from '@/components'
import {
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const SignIn = () => {
  return (
    <Center
      as="section"
      display="flex"
      flexDir="column"
      gap={4}
      justifyContent="center"
      alignItems="center">
      <VStack as="header" spacing="6" mt="8">
        <GithubLogo />
        <Heading as="h1" fontWeight="300" fontSize="24px">
          Sign in to Brainwave
        </Heading>
      </VStack>
      <Card
        bg="brand.softDark"
        color="brand.light"
        variant="outline"
        borderColor="brand.border"
        w="308px">
        <CardBody display="flex" gap={4} flexDir="column" as="form">
          <FormControl as="fieldset">
            <FormLabel fontSize="sm">Email address</FormLabel>
            <CustomInput type="text" />
          </FormControl>
          <FormControl as="fieldset">
            <HStack justify="space-between">
              <FormLabel fontSize="sm">Password</FormLabel>
              <Button
                as="a"
                href="#"
                variant="link"
                fontSize="xs"
                color="brand.primary"
                fontWeight="500">
                Forgot password?
              </Button>
            </HStack>
            <CustomInput type="password" />
          </FormControl>
          <Button
            bg="brand.secondary"
            fontWeight="300"
            size="sm"
            _hover={{ bg: 'brand.secondary' }}
            _active={{ bg: 'brand.secondary' }}>
            Sign In
          </Button>
        </CardBody>
      </Card>
      <Card
        variant="outline"
        color="brand.light"
        bgColor="brand.dark"
        borderColor="brand.border">
        <CardBody>
          <Center>
            <HStack fontSize="sm" spacing="1">
              <Text>New to Brainwave?</Text>
              <Link as={RouterLink} to="/signup" color="brand.primary">
                Create an account
              </Link>
            </HStack>
          </Center>
        </CardBody>
      </Card>
    </Center>
  )
}
