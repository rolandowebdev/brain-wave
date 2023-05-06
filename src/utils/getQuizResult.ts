export const getQuizResult = (quizType: any): string => {
  switch (quizType) {
    case 'animalsQuiz':
      return 'resultAnimalsQuiz'
    case 'knowledgeQuiz':
      return 'resultKnowledgeQuiz'
    case 'computerQuiz':
      return 'resultComputerQuiz'
    case 'geographyQuiz':
      return 'resultGeographyQuiz'
    default:
      throw new Error('Invalid quiz result name')
  }
}
