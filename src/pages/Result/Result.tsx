import { useAnimalQuiz } from '@/app/animalStore'
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
import { useNavigate } from 'react-router-dom'

export const Result = () => {
  const navigate = useNavigate()
  const { resetQuestion, correctAnswer, incorrectAnswers } = useAnimalQuiz()

  const question = JSON.parse(localStorage.getItem('animalQuiz') || 'null')
  const notAnswer = question.notAnswer
  const amountOfQuestion = 10

  const handleBackToDashboard = () => {
    resetQuestion()
    localStorage.removeItem('animalQuiz')
    navigate('/', { replace: true })
  }

  return (
    <>
      <Container
        maxW="lg"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="{amountOfQuestion}0vh">
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
                <Text color="teal" fontSize="7xl" lineHeight={0}>
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
                <Text color="red.500" fontSize="7xl" lineHeight={0}>
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
                  {notAnswer}
                  <Text as="span" fontSize="lg" color="brand.light">
                    / {amountOfQuestion}
                  </Text>
                </Text>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Button
          bgColor="brand.secondary"
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
