import {
  Brainwave,
  CustomInput,
  GithubButton,
  GoogleButton,
} from '@/components'
import { ERROR_CODE } from '@/constants'
import { useAuth, useMessage } from '@/hooks'
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
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FormEvent, useRef, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuth()
  const { showMessage } = useMessage()

  const fullNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState<boolean>(false)

  const handleSignUp = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
        showMessage('Password does not match', 'error')
        return
      }

      setLoading(true)
      const res = await createUserWithEmailAndPassword(
        auth,
        emailRef.current?.value || '',
        passwordRef.current?.value || ''
      )
      const user = await updateProfile(res.user, {
        displayName: fullNameRef.current?.value,
      })
      dispatch({ type: AuthActionTypes.SIGNUP, payload: user })
      showMessage('Successfully created account', 'success')
      navigate('/', { replace: true })
    } catch (error: any) {
      switch (error.code) {
        case ERROR_CODE.EMAIL_ALREADY_IN_USE:
          showMessage('Email already in use', 'error')
          break
        case ERROR_CODE.WEAK_PASSWORD:
          showMessage('Password should be at least 6 characters', 'error')
          break
        default:
          showMessage('Failed to create an account', 'error')
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
          Sign up to Brainwave
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
          <form onSubmit={handleSignUp}>
            <Stack spacing={4}>
              <FormControl as="fieldset">
                <FormLabel fontSize="sm">Full Name</FormLabel>
                <CustomInput type="text" ref={fullNameRef} />
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel fontSize="sm">Email Address</FormLabel>
                <CustomInput type="email" ref={emailRef} />
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel fontSize="sm">Password</FormLabel>
                <CustomInput type="password" ref={passwordRef} />
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel fontSize="sm">Confirm Password</FormLabel>
                <CustomInput type="password" ref={confirmPasswordRef} />
              </FormControl>
              <Button
                colorScheme="green"
                type="submit"
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
                  'Sign up'
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
          <HStack
            fontSize="sm"
            spacing="1"
            justifyContent="center"
            flexWrap="wrap">
            <Text>Already have an account?</Text>
            <Link as={RouterLink} to="/signin" color="brand.blue">
              Sign In
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </Center>
  )
}
