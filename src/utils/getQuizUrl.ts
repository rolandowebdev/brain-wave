import { API_URL } from '@/constants'

export const getQuizUrl = (quizType: any): string => {
  switch (quizType) {
    case 'animalsQuiz':
      return API_URL.animalsQuiz
    case 'knowledgeQuiz':
      return API_URL.knowledgeQuiz
    case 'computerQuiz':
      return API_URL.computerQuiz
    case 'geographyQuiz':
      return API_URL.geographyQuiz
    default:
      throw new Error('Invalid quiz type')
  }
}
