import { Navbar, Timer } from '@/components'
import { auth } from '@/libs'
import {
  getIllustration,
  getKeyStorage,
  getQuizResult,
  getQuizUrl,
  isLocalStorageKeyExist,
  saveQuizData,
  getQuiz,
  getCategoryName,
} from '@/utils'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  Heading,
  IconButton,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { MouseEventHandler, useEffect, useState } from 'react'
import { useAxios, useCustomToast } from '@/hooks'
import { generateRandom } from '@/libs/generateRandom'
import { decode } from 'html-entities'

const TIMER_COUNT = 30

export const Quiz = () => {
  const navigate = useNavigate()
  const { quizName } = useParams()

  const illustration = getIllustration(quizName, 'static', 'small')
  const showToast = useCustomToast()

  const {
    setCorrectAnswer,
    setIncorrectAnswers,
    setQuestionIndex,
    correctAnswer,
    incorrectAnswers,
    questionIndex,
  } = getQuiz(quizName)

  const amountOfQuestion = 10
  const [randomAnswers, setRandomAnswers] = useState<string[]>([])
  const [hasNavigatedResult, setHasNavigatedResult] = useState<boolean>(false)
  const [notAnswerd, setNotAnswerd] = useState<number>(amountOfQuestion || 0)

  const categoryName = getCategoryName(quizName)
  const quizUrl = getQuizUrl(quizName)
  const resultQuizUrl = getQuizResult(quizName)

  const quizKey = getKeyStorage(quizName)
  const keyExists = isLocalStorageKeyExist(quizKey)

  const { response, loading, error } = useAxios({ url: quizUrl })
  const results = response ? response?.results : []

  const newGameTimer = notAnswerd * TIMER_COUNT
  const continueGameTimer = (notAnswerd - questionIndex) * TIMER_COUNT

  const quizData = {
    questionIndex: questionIndex,
    questions: results,
    incorrectAnswers: incorrectAnswers,
    correctAnswer: correctAnswer,
    notAnswerd: notAnswerd,
  }

  useEffect(() => {
    if (results?.length) saveQuizData(quizName, quizData)
  }, [results, questionIndex, incorrectAnswers, correctAnswer, notAnswerd])

  const handleRandomAnswers = () => {
    const question = results[questionIndex]
    const answers = [...question.incorrect_answers]
    answers.splice(
      generateRandom(question.incorrect_answers.length),
      0,
      question.correct_answer
    )
    setRandomAnswers(answers)
  }

  useEffect(() => {
    if (!loading && results?.length) handleRandomAnswers()
  }, [loading, results, questionIndex])

  const decodeAnswers = () => {
    const question = results[questionIndex]
    const decodeCorrectAnswer = decode(question.correct_answer)
    const decodeIncorrectAnswer = question.incorrect_answers.map(
      (incorrectAnswer: string) => decode(incorrectAnswer)
    )
    return { decodeCorrectAnswer, decodeIncorrectAnswer }
  }

  const checkAnswer = (answer: any) => {
    const { decodeCorrectAnswer, decodeIncorrectAnswer } = decodeAnswers()
    const isCorrect = decodeCorrectAnswer.includes(answer)
    const isIncorrect = decodeIncorrectAnswer.includes(answer)
    return { isCorrect, isIncorrect }
  }

  const updateAnswerCount = (answer: any) => {
    const { isCorrect, isIncorrect } = checkAnswer(answer)
    if (isCorrect) setCorrectAnswer(correctAnswer + 1)
    if (isIncorrect) setIncorrectAnswers(incorrectAnswers + 1)
    if (!isCorrect || !isIncorrect)
      setNotAnswerd(results?.length - (incorrectAnswers + correctAnswer) - 1)
  }

  const moveNextQuestion = () => {
    if (questionIndex + 1 >= results?.length) setHasNavigatedResult(true)
    else setQuestionIndex(questionIndex + 1)
  }

  const handleAnswers: MouseEventHandler<HTMLButtonElement> = (e) => {
    const answer = e.currentTarget.textContent
    updateAnswerCount(answer)
    moveNextQuestion()
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      navigate('/signin')
    } catch {
      console.log('Failed to sign out!')
    }
  }

  if (hasNavigatedResult)
    return <Navigate to={`${resultQuizUrl}`} replace={true} />

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.400"
          size="xl"
        />
      </Center>
    )
  }

  if (error) return showToast('API connection failed.', 'error')

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
          bgColor: 'green.400',
          borderColor: 'green.400',
        }}
        _focus={{ bgColor: 'green.400', borderColor: 'green.400' }}
        icon={<CloseIcon fontSize="sm" />}
      />
      <Stack
        as="main"
        alignItems="flex-end"
        direction={['column', 'row', 'row', 'row']}
        gap={8}
        pb="44px">
        <VStack w="full" flex={1} spacing={8} textAlign="center" fontSize="xl">
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
              <Text as="span" color="green.400">
                {correctAnswer} / {results?.length}
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
              <Text as="span" color="red.400">
                {incorrectAnswers} / {results?.length}
              </Text>
            </Text>
            <Timer
              quizName={quizName}
              categoryName={categoryName}
              resultQuizUrl={resultQuizUrl}
              time={keyExists ? continueGameTimer : newGameTimer}
            />
          </VStack>
        </VStack>
        <VStack flex={1} alignItems="flex-start" w="full" gap={4}>
          <VStack alignItems="flex-start">
            <Text as="span">
              question {questionIndex + 1} of {results?.length}
            </Text>
            <Heading as="h1" fontSize="xl">
              {decode(results[questionIndex]?.question)}
            </Heading>
          </VStack>
          <VStack gap={2} w="full">
            {randomAnswers.map((randomAnswer) => (
              <Button
                onClick={handleAnswers}
                key={randomAnswer}
                value={decode(randomAnswer)}
                backgroundColor="brand.softDark"
                size="lg"
                w="full"
                _hover={{
                  backgroundColor: 'brand.light',
                  color: 'brand.softDark',
                }}>
                {decode(randomAnswer)}
              </Button>
            ))}
          </VStack>
        </VStack>
      </Stack>
    </>
  )
}
