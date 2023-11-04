import {
  Brainwave,
  CustomInput,
  GithubButton,
  GoogleButton,
} from '@/components'
import { ERROR_CODE } from '@/constants'
import { useMessage, useAuth } from '@/hooks'
import { auth } from '@/libs'
import { AuthActionTypes } from '@/types'
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
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useRef, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuth()
  const { showMessage } = useMessage()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState<boolean>(false)

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
      dispatch({ type: AuthActionTypes.SIGNIN, payload: user })
      navigate('/', { replace: true })
    } catch (error: any) {
      switch (error.code) {
        case ERROR_CODE.WRONG_PASSWORD:
          showMessage('Wrong password', 'error')
          break
        case ERROR_CODE.USER_NOT_FOUND:
          showMessage('User not found', 'error')
          break
        case ERROR_CODE.TOO_MANY_REQUEST:
          showMessage(
            'Too many login attempts. Click on "Forgot Password" to reset your password.',
            'error'
          )
          break
        default:
          showMessage('Failed to sign in', 'error')
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
      alignItems="center"
      paddingBottom="32px">
      <VStack as="header" spacing="4" mt="6">
        <Brainwave size="48" />
        <Heading as="h1" fontWeight="300" fontSize="24px" textAlign="center">
          Sign in to Brainwave
        </Heading>
      </VStack>
      <Card
        bg="brand.softDark"
        color="brand.light"
        variant="outline"
        borderColor="brand.border"
        maxW="308px"
        w="full">
        <CardBody>
          <form onSubmit={handleSignIn}>
            <Stack spacing="4">
              <FormControl as="fieldset">
                <FormLabel fontSize="sm">Email address</FormLabel>
                <CustomInput type="email" ref={emailRef} />
              </FormControl>
              <FormControl as="fieldset">
                <HStack
                  justify="space-between"
                  alignItems="flex-start"
                  gap={4}
                  flexWrap="wrap">
                  <FormLabel fontSize="sm">Password</FormLabel>
                  <Button
                    onClick={() => navigate('/resetPassword')}
                    variant="link"
                    fontSize="sm"
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
              <GithubButton />
              <GoogleButton />
            </Stack>
          </form>
        </CardBody>
      </Card>
      <Card
        variant="outline"
        color="brand.light"
        bgColor="brand.dark"
        borderColor="brand.border"
        maxW="308px"
        w="full">
        <CardBody>
          <HStack fontSize="sm" flexWrap="wrap" justifyContent="center">
            <Text>New to Brainwave?</Text>
            <Link as={RouterLink} to="/signup" color="brand.blue">
              Create an account
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </Center>
  )
}
