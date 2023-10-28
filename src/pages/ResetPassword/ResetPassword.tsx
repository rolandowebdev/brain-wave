import { Brainwave, CustomInput } from '@/components'
import { useMessage } from '@/hooks'
import { auth } from '@/libs'
import {
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Spinner,
  Stack,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { FormEvent, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const ResetPassword = () => {
  const showMessage = useMessage()
  const [loading, setLoading] = useState<boolean>(false)

  const emailRef = useRef<HTMLInputElement>(null)

  const handleResetPassword = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    try {
      setLoading(true)
      await sendPasswordResetEmail(auth, emailRef.current?.value || '')
      showMessage('Successfully, your password has been updated', 'success')
    } catch (error: any) {
      if (error.code === 'auth/user-not-found')
        showMessage('User not found!', 'error')
      else showMessage('Failed to reset password!', 'error')
    } finally {
      if (emailRef.current) emailRef.current.value = ''
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
        <Brainwave size="64" />
        <Heading as="h1" fontWeight="300" fontSize="24px">
          Reset your password
        </Heading>
      </VStack>
      <Card
        bg="brand.softDark"
        color="brand.light"
        variant="outline"
        borderColor="brand.border"
        w="308px">
        <CardBody>
          <form onSubmit={handleResetPassword}>
            <Stack spacing="4">
              <FormControl as="fieldset">
                <FormLabel fontSize="sm">Email address</FormLabel>
                <CustomInput type="email" ref={emailRef} />
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
                  'Reset password'
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
              <Link
                as={RouterLink}
                fontSize="md"
                to="/signin"
                _hover={{
                  color: 'green.400',
                  textDecor: 'underline',
                }}
                _focus={{ color: 'green.400' }}>
                Back to sign in
              </Link>
            </HStack>
          </Center>
        </CardBody>
      </Card>
    </Center>
  )
}
