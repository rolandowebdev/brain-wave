import { Animals, Computer, Geography, Knowledge } from '@/components'
import { Category, QuizName } from '@/models'

export const getIllustration = (
  name: QuizName | Category,
  size: string
): JSX.Element => {
  switch (name) {
    case 'animalsQuiz':
    case 'animals':
      return <Animals position="static" height={size} width={size} />
    case 'knowledgeQuiz':
    case 'knowledge':
      return <Knowledge position="static" height={size} width={size} />
    case 'computerQuiz':
    case 'computer':
      return <Computer position="static" height={size} width={size} />
    case 'geographyQuiz':
    case 'geography':
      return <Geography position="static" height={size} width={size} />
    default:
      return <div />
  }
}
