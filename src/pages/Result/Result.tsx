import { getKeyStorage, getQuizStorage } from '@/utils'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

export const Result = () => {
  const navigate = useNavigate()
  const { resultQuizName } = useParams()
  const { resetQuestion, correctAnswer, incorrectAnswers } =
    getQuizStorage(resultQuizName)

  const amountOfQuestion = 10
  const keyStorage = getKeyStorage(resultQuizName)
  const question = JSON.parse(localStorage.getItem(keyStorage) || 'null')

  const notAnswerd =
    question.notAnswerd == amountOfQuestion
      ? question.notAnswerd - (correctAnswer + incorrectAnswers)
      : question.notAnswerd

  const handleBackToDashboard = () => {
    resetQuestion()
    localStorage.removeItem(keyStorage)
    navigate('/', { replace: true })
  }

  return (
    <>
      <Container
        as="main"
        maxW="lg"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100vh">
        <Heading as="h1">Your Final Result</Heading>
        <Grid templateColumns="repeat(2, 1fr)" w="full" gap={4} mt={8} mb={4}>
          <GridItem>
            <Card align="center" py={2} bg="brand.softDark" color="brand.light">
              <CardBody>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="normal"
                  lineHeight={0}>
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
          </GridItem>
          <GridItem>
            <Card align="center" py={2} bg="brand.softDark" color="brand.light">
              <CardBody>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="normal"
                  lineHeight={0}>
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
          </GridItem>
          <GridItem colSpan={2}>
            <Card align="center" py={2} bg="brand.softDark" color="brand.light">
              <CardBody>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="normal"
                  lineHeight={0}>
                  Not Answerd
                </Heading>
              </CardBody>
              <CardFooter mt={4}>
                <Text color="gray.400" fontSize="7xl" lineHeight={0}>
                  {notAnswerd}
                  <Text as="span" fontSize="lg" color="brand.light">
                    / {amountOfQuestion}
                  </Text>
                </Text>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Button
          colorScheme="green"
          fontWeight="normal"
          w="full"
          size="lg"
          onClick={handleBackToDashboard}>
          Back to Dashboard
        </Button>
      </Container>
    </>
  )
}
