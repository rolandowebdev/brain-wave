import { Category, QuizName } from '@/types'

type IllustrationProps = {
  image: string
  name: string
}

export const getIllustration = (
  name: QuizName | Category
): IllustrationProps | null => {
  switch (name) {
    case 'animalsQuiz':
    case 'animals':
      return {
        image: '/assets/animal.png',
        name: 'animals',
      }
    case 'geographyQuiz':
    case 'geography':
      return {
        image: '/assets/geography.png',
        name: 'geography',
      }
    case 'computerQuiz':
    case 'computer':
      return {
        image: '/assets/computer.png',
        name: 'computer',
      }
    case 'knowledgeQuiz':
    case 'knowledge':
      return {
        image: '/assets/knowledge.png',
        name: 'knowledge',
      }
    default:
      return null
  }
}
