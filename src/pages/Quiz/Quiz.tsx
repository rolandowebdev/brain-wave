import { Animals, Computer, Geography, Knowledge, Navbar } from '@/components'
import { auth } from '@/libs'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Button,
  Heading,
  IconButton,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useNavigate, useParams } from 'react-router-dom'

const getIllustration = (quizName: any, size: string): JSX.Element => {
  switch (quizName) {
    case 'animalsQuiz':
      return <Animals position="static" height={size} width={size} />
    case 'knowledgeQuiz':
      return <Knowledge position="static" height={size} width={size} />
    case 'computerQuiz':
      return <Computer position="static" height={size} width={size} />
    case 'geographyQuiz':
      return <Geography position="static" height={size} width={size} />
    default:
      return <div />
  }
}

export const Quiz = () => {
  const navigate = useNavigate()
  const { quizName } = useParams()

  console.log(quizName)

  const illustration = getIllustration(quizName, '200')

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
      <IconButton
        onClick={() => navigate(-1)}
        mt="44px"
        borderColor="brand.light"
        variant="outline"
        rounded="full"
        aria-label="Search database"
        _hover={{
          borderColor: 'brand.light',
        }}
        _focus={{ backgroundColor: 'transparent' }}
        icon={<CloseIcon fontSize="sm" />}
      />
      <Stack
        as="main"
        alignItems="flex-end"
        direction={['column', 'row']}
        gap={8}>
        <VStack flex={1} spacing={8} textAlign="center" fontSize="xl">
          {illustration}
          <VStack spacing={4} w="full">
            <Text
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              w="full"
              px={3}
              py={2}
              backgroundColor="brand.softDark"
              borderRadius="md">
              Correct :{' '}
              <Text as="span" color="teal">
                5 / 10
              </Text>
            </Text>
            <Text
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              w="full"
              px={3}
              py={2}
              backgroundColor="brand.softDark"
              borderRadius="md">
              InCorrect :{' '}
              <Text as="span" color="red.500">
                1 / 10
              </Text>
            </Text>
            <Text
              w="full"
              px={3}
              py={2}
              backgroundColor="brand.softDark"
              borderRadius="md">
              00:10:53
            </Text>
          </VStack>
        </VStack>
        <VStack flex={1} alignItems="flex-start" gap={4}>
          <Wrap>
            <Text as="span">question 5 of 10</Text>
            <Heading as="h1">
              In which city of Germany is the largest port?
            </Heading>
          </Wrap>
          <VStack gap={2} w="full">
            <Button
              backgroundColor="brand.softDark"
              size="lg"
              w="full"
              _hover={{
                backgroundColor: 'brand.light',
                color: 'brand.softDark',
              }}>
              Bremen
            </Button>
            <Button
              backgroundColor="brand.softDark"
              size="lg"
              w="full"
              _hover={{
                backgroundColor: 'brand.light',
                color: 'brand.softDark',
              }}>
              Hamburg
            </Button>
            <Button
              backgroundColor="brand.softDark"
              size="lg"
              w="full"
              _hover={{
                backgroundColor: 'brand.light',
                color: 'brand.softDark',
              }}>
              Norden
            </Button>
            <Button
              backgroundColor="brand.softDark"
              size="lg"
              w="full"
              _hover={{
                backgroundColor: 'brand.light',
                color: 'brand.softDark',
              }}>
              Paris
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </>
  )
}
