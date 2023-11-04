import { ERROR_CODE } from '@/constants'
import { useAuth, useMessage } from '@/hooks'
import { auth } from '@/libs'
import { AuthActionTypes } from '@/types'
import { Box, Button, Icon, Spinner, Text } from '@chakra-ui/react'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const GithubButton = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuth()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState<boolean>(false)

  const handleGithubSignIn = async (): Promise<void> => {
    try {
      setLoading(true)
      const provider = new GithubAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user
      dispatch({ type: AuthActionTypes.SIGNIN, payload: user })
      navigate('/', { replace: true })
    } catch (error: any) {
      switch (error.code) {
        case ERROR_CODE.EXISTS_WITH_DIFFERENT_CREDENTIAL:
          showMessage('Email already in use with different credential', 'error')
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
    <Button
      type="button"
      onClick={handleGithubSignIn}
      colorScheme="blackAlpha"
      fontWeight="300"
      size="sm">
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.400"
          size="sm"
        />
      ) : (
        <Box display="flex" alignItems="start" gap={1}>
          <Icon as={FaGithub} />
          <Text as="span">Continue with Github</Text>
        </Box>
      )}
    </Button>
  )
}
