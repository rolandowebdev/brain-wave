import { Brainwave, CustomInput } from '@/components'
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
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FormEvent, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const SignUp = () => {
  const { dispatch } = useAuth()

  const fullNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  const clearInputAndSetError = (errorMessage: string) => {
    if (fullNameRef.current) fullNameRef.current.value = ''
    if (emailRef.current) emailRef.current.value = ''
    if (passwordRef.current) passwordRef.current.value = ''
    if (confirmPasswordRef.current) confirmPasswordRef.current.value = ''
    return setErrorMessage(errorMessage)
  }

  const handleSignUp = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return clearInputAndSetError('Password do not match!')
    }
    try {
      setLoading(true)
      const res = await createUserWithEmailAndPassword(
        auth,
        emailRef.current?.value || '',
        passwordRef.current?.value || ''
      )
      const user = await updateProfile(res.user, {
        displayName: fullNameRef.current?.value,
      })
      dispatch({ type: 'SIGNUP', payload: user })
      setSuccessMessage('Successfully created account!')
      clearInputAndSetError('')
    } catch (error: any) {
      switch (error.code) {
        case ERROR_CODE.EMAIL_ALREADY_IN_USE:
          clearInputAndSetError('Email already in use!')
          break
        case ERROR_CODE.WEAK_PASSWORD:
          clearInputAndSetError('Password should be at least 6 characters!')
          break
        default:
          clearInputAndSetError('Failed to create an account!')
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
        <Heading as="h1" fontWeight="300" fontSize="24px">
          Sign up to Brainwave
        </Heading>
        {successMessage && (
          <Alert status="success" color="brand.dark">
            <AlertIcon />
            {successMessage}
          </Alert>
        )}
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
              <Text>Already have an account?</Text>
              <Link as={RouterLink} to="/signin" color="brand.blue">
                Sign In
              </Link>
            </HStack>
          </Center>
        </CardBody>
      </Card>
    </Center>
  )
}
