export type Category =
  | 'animals'
  | 'knowledge'
  | 'computer'
  | 'geography'
  | 'unknown'
  | any

export type QuizName =
  | 'animalsQuiz'
  | 'knowledgeQuiz'
  | 'computerQuiz'
  | 'geographyQuiz'
  | 'unknown'
  | any

export interface QuizProps {
  id: number
  title: 'Animals' | 'General Knowledge' | 'Computer' | 'Geography' | 'Unknown'
  category: Category
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Unknown'
  description?: string
  quizName?: QuizName
}
