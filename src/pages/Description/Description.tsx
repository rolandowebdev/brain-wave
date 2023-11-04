import { Navbar } from '@/components'
import { useAuth } from '@/hooks'
import { auth } from '@/libs'
import { AuthActionTypes } from '@/types'
import { getDescription, getKeyStorage, isLocalStorageKeyExist } from '@/utils'
import { getIllustration } from '@/utils'
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { ArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

export const Description = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuth()
  const { category } = useParams()

  const categoryData = getDescription(category)
  const illustration = getIllustration(category)

  const quizKey = getKeyStorage(category)
  const keyExists = isLocalStorageKeyExist(quizKey)

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      dispatch({ type: AuthActionTypes.LOGOUT })
      navigate('/signin')
    } catch {
      throw new Error('Failed to sign out!')
    }
  }

  return (
    <>
      <Navbar signout={handleSignOut} />
      <HStack mt="44px" justifyContent="space-between" alignItems="center">
        <IconButton
          borderColor="brand.light"
          borderWidth={2}
          variant="outline"
          rounded="full"
          aria-label="Search database"
          onClick={() => navigate('/')}
          _hover={{
            bgColor: 'green.400',
            borderColor: 'green.400',
          }}
          _focus={{ bgColor: 'green.400', borderColor: 'green.400' }}
          icon={<ArrowLeft />}
        />
      </HStack>
      <Box as="main" pb="40px">
        <Center>
          <Image
            src={illustration?.image}
            alt={illustration?.name}
            boxSize={200}
          />
        </Center>
        <Stack spacing={4}>
          <VStack alignItems="flex-start">
            <Text as="span">{categoryData.difficulty}</Text>
            <Heading as="h1" letterSpacing="wide">
              {categoryData.title}
            </Heading>
          </VStack>
          <Text as="p">{categoryData.description}</Text>
          <Button
            onClick={() => navigate(`${categoryData.quizName}`)}
            colorScheme="green"
            size="lg"
            fontWeight="normal"
            w={36}>
            {keyExists ? 'Continue' : 'Game'}
          </Button>
        </Stack>
      </Box>
    </>
  )
}
