import { useAnimalQuiz } from '@/app/animalStore'
import { useComputerQuiz } from '@/app/computerStore'
import { useGeographyQuiz } from '@/app/geographyStore'
import { useKnowledgeQuiz } from '@/app/knowledgeStore'

export const useQuiz = (quizType: any) => {
  switch (quizType) {
    case 'animalsQuiz':
      return useAnimalQuiz()
    case 'knowledgeQuiz':
      return useKnowledgeQuiz()
    case 'computerQuiz':
      return useComputerQuiz()
    case 'geographyQuiz':
      return useGeographyQuiz()
    default:
      throw new Error('Invalid quiz type')
  }
}
