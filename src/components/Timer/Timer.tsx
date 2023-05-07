import { convertNumberToTimer } from '@/utils'
import { Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface TimerProps {
  time: number
  resultQuizUrl: string
  categoryName: string
  quizName: any
}

export const Timer = ({
  time,
  resultQuizUrl,
  quizName,
  categoryName,
}: TimerProps) => {
  const [timer, setTimer] = useState<number>(time)
  const navigate = useNavigate()

  useEffect(() => {
    if (timer < 0)
      navigate(`/${categoryName}/${quizName}/${resultQuizUrl}`, {
        replace: true,
      })
  }, [timer, navigate])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((seconds) => seconds - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Text
      w="full"
      px={3}
      py={2}
      backgroundColor="brand.softDark"
      borderRadius="md">
      {convertNumberToTimer(timer)}
    </Text>
  )
}
