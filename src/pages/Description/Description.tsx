import { Navbar } from '@/components'
import { getDescription, getKeyStorage, isLocalStorageKeyExist } from '@/utils'
import { getIllustration, handleSignOut } from '@/utils'
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
import { useNavigate, useParams } from 'react-router-dom'

export const Description = () => {
  const navigate = useNavigate()
  const { category } = useParams()

  const categoryData = getDescription(category)
  const illustration = getIllustration(category, 'static', 'small')

  const quizKey = getKeyStorage(category)
  const keyExists = isLocalStorageKeyExist(quizKey)

  return (
    <>
      <Navbar signout={() => handleSignOut(navigate)} />
      <HStack mt="44px" justifyContent="space-between" alignItems="center">
        <IconButton
          borderColor="brand.light"
          variant="outline"
          rounded="full"
          aria-label="Search database"
          onClick={() => navigate('/')}
          _hover={{
            bgColor: 'green.400',
            borderColor: 'green.400',
          }}
          _focus={{ bgColor: 'green.400', borderColor: 'green.400' }}
          icon={<ChevronLeftIcon fontSize="3xl" />}
        />
      </HStack>
      <Box as="main" pb="40px">
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
