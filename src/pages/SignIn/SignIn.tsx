import { Braveware, CustomInput } from '@/components'
import { ERROR_CODE } from '@/constants'
import { useAuth } from '@/context'
import { auth } from '@/libs'
import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Link,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useRef, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const navigate = useNavigate()
  const { dispatch } = useAuth()

  const clearInputAndSetError = (errorMessage: string) => {
    if (emailRef.current) emailRef.current.value = ''
    if (passwordRef.current) passwordRef.current.value = ''
    return setErrorMessage(errorMessage)
  }

  const handleSignIn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      setLoading(true)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current?.value || '',
        passwordRef.current?.value || ''
      )
      const user = userCredential.user
      dispatch({ type: 'SIGNIN', payload: user })
      navigate('/', { replace: true })
    } catch (error: any) {
      switch (error.code) {
        case ERROR_CODE.WRONG_PASSWORD:
          clearInputAndSetError('Wrong password!')
          break
        case ERROR_CODE.USER_NOT_FOUND:
          clearInputAndSetError('User not found!')
          break
        case ERROR_CODE.TOO_MANY_REQUEST:
          clearInputAndSetError(
            'Too many login attempts. click on "Forgot Password" to reset your password.'
          )
          break
        default:
          clearInputAndSetError('Failed to sign in!')
          break
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Center
      as="main"
      display="flex"
      flexDir="column"
      gap={4}
      justifyContent="center"
      alignItems="center">
      <VStack as="header" spacing="6" mt="8">
        <Braveware size="64" />
        <Heading as="h1" fontWeight="300" fontSize="24px">
          Sign in to Brainwave
        </Heading>
        {errorMessage && (
          <Alert status="error" color="brand.dark">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}
      </VStack>
      <Card
        bg="brand.softDark"
        color="brand.light"
        variant="outline"
        borderColor="brand.border"
        w="308px">
        <CardBody>
          <form onSubmit={handleSignIn}>
            <Stack spacing="4">
              <FormControl as="fieldset">
                <FormLabel fontSize="sm">Email address</FormLabel>
                <CustomInput type="email" ref={emailRef} />
              </FormControl>
              <FormControl as="fieldset">
                <HStack justify="space-between">
                  <FormLabel fontSize="sm">Password</FormLabel>
                  <Button
                    onClick={() => navigate('/resetPassword')}
                    variant="link"
                    fontSize="xs"
                    color="brand.blue"
                    fontWeight="500">
                    Forgot password?
                  </Button>
                </HStack>
                <CustomInput type="password" ref={passwordRef} />
              </FormControl>
              <Button
                type="submit"
                colorScheme="green"
                fontWeight="300"
                size="sm">
                {loading ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="green.400"
                    size="sm"
                  />
                ) : (
                  'Sign in'
                )}
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
      <Card
        variant="outline"
        color="brand.light"
        bgColor="brand.dark"
        borderColor="brand.border"
        w="308px">
        <CardBody>
          <Center>
            <HStack fontSize="sm" spacing="1">
              <Text>New to Brainwave?</Text>
              <Link as={RouterLink} to="/signup" color="brand.blue">
                Create an account
              </Link>
            </HStack>
          </Center>
        </CardBody>
      </Card>
    </Center>
  )
}
