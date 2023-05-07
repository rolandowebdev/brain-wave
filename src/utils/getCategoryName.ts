export const getCategoryName = (quizType: any): string => {
  switch (quizType) {
    case 'animalsQuiz':
      return 'animals'
    case 'knowledgeQuiz':
      return 'knowledge'
    case 'computerQuiz':
      return 'computer'
    case 'geographyQuiz':
      return 'geography'
    default:
      throw new Error('Invalid quiz result name')
  }
}
