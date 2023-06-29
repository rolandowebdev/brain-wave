import { useAnimalQuiz } from '@/app/animalStore'
import { useComputerQuiz } from '@/app/computerStore'
import { useGeographyQuiz } from '@/app/geographyStore'
import { useKnowledgeQuiz } from '@/app/knowledgeStore'

export const getQuizStorage = (quizType: any) => {
  switch (quizType) {
    case 'resultAnimalsQuiz':
      return useAnimalQuiz()
    case 'resultKnowledgeQuiz':
      return useKnowledgeQuiz()
    case 'resultComputerQuiz':
      return useComputerQuiz()
    case 'resultGeographyQuiz':
      return useGeographyQuiz()
    default:
      throw new Error('Invalid quiz type')
  }
}
