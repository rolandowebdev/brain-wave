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

interface QuestionProps {
  handleStartQuiz: (condition: boolean) => void
  getIllustration: () => JSX.Element
}

export const Question = ({
  handleStartQuiz,
  getIllustration,
}: QuestionProps) => {
  const illustration = getIllustration()
  return (
    <>
      <IconButton
        mt="44px"
        borderColor="brand.light"
        variant="outline"
        rounded="full"
        aria-label="Search database"
        onClick={() => handleStartQuiz(false)}
        _hover={{
          borderColor: 'brand.light',
        }}
        _focus={{ backgroundColor: 'transparent' }}
        icon={<CloseIcon fontSize="sm" />}
      />
      <Stack alignItems="flex-end" direction={['column', 'row']} gap={8}>
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
