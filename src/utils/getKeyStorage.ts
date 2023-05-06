export const getKeyStorage = (quizResultName: any): string => {
  switch (quizResultName) {
    case 'resultAnimalsQuiz':
    case 'animalsQuiz':
    case 'animals':
      return 'animalsQuiz'
    case 'resultKnowledgeQuiz':
    case 'knowledgeQuiz':
    case 'knowledge':
      return 'knowledgeQuiz'
    case 'resultComputerQuiz':
    case 'computerQuiz':
    case 'computer':
      return 'computerQuiz'
    case 'resultGeographyQuiz':
    case 'geographyQuiz':
    case 'geography':
      return 'geographyQuiz'
    default:
      throw new Error('Invalid quiz result name')
  }
}
