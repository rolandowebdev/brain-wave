import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Button, Icon, Spinner } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { ERROR_CODE } from '@/constants'
import { useAuth, useMessage } from '@/hooks'
import { AuthActionTypes } from '@/types'
import { auth } from '@/libs'

export const GoogleButton = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuth()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState<boolean>(false)

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider()
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
      onClick={handleGoogleSignIn}
      colorScheme="blue"
      fontWeight="300"
      leftIcon={<Icon as={FcGoogle} />}
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
        'Continue with Google'
      )}
    </Button>
  )
}
