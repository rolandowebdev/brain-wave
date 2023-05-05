import { Navbar } from '@/components'
import { auth } from '@/libs'
import { getDescription } from '@/utils'
import { getIllustration } from '@/utils'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useNavigate, useParams } from 'react-router-dom'

export const Description = () => {
  const navigate = useNavigate()
  const { category } = useParams()

  const categoryData = getDescription(category)
  const illustration = getIllustration(category, '160')

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      navigate('/signin')
    } catch {
      console.log('Failed to sign out!')
    }
  }

  return (
    <>
      <Navbar logout={handleLogout} />

      <HStack
        as="main"
        mt="44px"
        justifyContent="space-between"
        alignItems="center">
        <IconButton
          borderColor="brand.light"
          variant="outline"
          rounded="full"
          aria-label="Search database"
          onClick={() => navigate('/')}
          _hover={{
            borderColor: 'brand.light',
          }}
          _focus={{ backgroundColor: 'transparent' }}
          icon={<ChevronLeftIcon fontSize="3xl" />}
        />
      </HStack>
      <Box as="main">
        <Center>{illustration}</Center>
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
            colorScheme="teal"
            size="lg"
            fontWeight="normal"
            w={36}>
            Game
          </Button>
        </Stack>
      </Box>
    </>
  )
}
