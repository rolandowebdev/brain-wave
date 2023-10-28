import { getKeyStorage, getQuizStorage } from '@/utils'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Result = () => {
  const navigate = useNavigate()
  const { resultQuizName } = useParams()
  const { resetQuestion, correctAnswer, incorrectAnswers } =
    getQuizStorage(resultQuizName)

  const amountOfQuestion = 10
  const keyStorage = getKeyStorage(resultQuizName)
  const question = JSON.parse(localStorage.getItem(keyStorage) || 'null')

  const notAnswered =
    question?.notAnswered == amountOfQuestion
      ? question.notAnswered - (correctAnswer + incorrectAnswers)
      : question.notAnswered

  const handleBackToDashboard = () => {
    resetQuestion()
    localStorage.removeItem(keyStorage)
    navigate('/', { replace: true })
  }

  useEffect(() => {
    if (correctAnswer < 1 && incorrectAnswers < 1 && notAnswered < 1) {
      resetQuestion()
      localStorage.removeItem(keyStorage)
      navigate('/', { replace: true })
    }
  }, [correctAnswer, incorrectAnswers, notAnswered, navigate])

  return (
    <Container
      as="main"
      maxW="lg"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      py={10}>
      <Heading as="h1">Your Final Result</Heading>
      <Box display="flex" flexDir="column" gap={3} w="full" my={4}>
        <Box display="flex" gap={3} flexWrap={['wrap', 'nowrap']} w="full">
          <Card
            align="center"
            py={2}
            w="full"
            bg="brand.softDark"
            color="brand.light">
            <CardBody>
              <Heading as="h2" fontSize="xl" fontWeight="normal" lineHeight={0}>
                Correct Answer
              </Heading>
            </CardBody>
            <CardFooter mt={4}>
              <Text color="green.400" fontSize="7xl" lineHeight={0}>
                {correctAnswer}
                <Text as="span" fontSize="lg" color="brand.light">
                  / {amountOfQuestion}
                </Text>
              </Text>
            </CardFooter>
          </Card>

          <Card
            align="center"
            py={2}
            w="full"
            bg="brand.softDark"
            color="brand.light">
            <CardBody>
              <Heading as="h2" fontSize="xl" fontWeight="normal" lineHeight={0}>
                Incorrect Answer
              </Heading>
            </CardBody>
            <CardFooter mt={4}>
              <Text color="red.400" fontSize="7xl" lineHeight={0}>
                {incorrectAnswers}
                <Text as="span" fontSize="lg" color="brand.light">
                  / {amountOfQuestion}
                </Text>
              </Text>
            </CardFooter>
          </Card>
        </Box>

        <Card align="center" py={2} bg="brand.softDark" color="brand.light">
          <CardBody>
            <Heading as="h2" fontSize="xl" fontWeight="normal" lineHeight={0}>
              Not Answered
            </Heading>
          </CardBody>
          <CardFooter mt={4}>
            <Text color="gray.400" fontSize="7xl" lineHeight={0}>
              {notAnswered}
              <Text as="span" fontSize="lg" color="brand.light">
                / {amountOfQuestion}
              </Text>
            </Text>
          </CardFooter>
        </Card>
      </Box>
      <Button
        colorScheme="green"
        fontWeight="normal"
        w="full"
        size="lg"
        py={4}
        onClick={handleBackToDashboard}>
        Back to Dashboard
      </Button>
    </Container>
  )
}
