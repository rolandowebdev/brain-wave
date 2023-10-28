import { Animals, Computer, Geography, Knowledge } from '@/components'
import { Category, QuizName } from '@/types'

export const getIllustration = (
  name: QuizName | Category,
  position: 'absolute' | 'static',
  type: 'small' | 'large'
): JSX.Element => {
  switch (name) {
    case 'animalsQuiz':
    case 'animals':
      return <Animals position={position} type={type} />
    case 'knowledgeQuiz':
    case 'knowledge':
      return <Knowledge position={position} type={type} />
    case 'computerQuiz':
    case 'computer':
      return <Computer position={position} type={type} />
    case 'geographyQuiz':
    case 'geography':
      return <Geography position={position} type={type} />
    default:
      return <div />
  }
}
