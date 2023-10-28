import { QuizProps } from '@/types'

export const getDescription = (category: any): QuizProps => {
  switch (category) {
    case 'animals':
      return {
        id: 1,
        title: 'Animals',
        category: 'animals',
        difficulty: 'Easy',
        quizName: 'animalsQuiz',
        description:
          'Animals, diverse in habitats and adaptations, vary in structure, diet, and reproduction. Classifiable by these traits, some serve human needs, while others maintain crucial ecological roles as pollinators, predators, or prey. Zoology, the study of animals, unravels the complexities of nature, revealing our interconnection with the diverse natural world.',
      }
    case 'knowledge':
      return {
        id: 2,
        title: 'General Knowledge',
        category: 'knowledge',
        difficulty: 'Medium',
        quizName: 'knowledgeQuiz',
        description:
          'Knowledge, shaped by experience, education, and observation, is the bedrock of human understanding. Constantly evolving, it fuels curiosity, innovation, and informed decision-making, impacting personal growth and societal progress across various domains.',
      }
    case 'computer':
      return {
        id: 3,
        title: 'Computer',
        category: 'computer',
        difficulty: 'Hard',
        quizName: 'computerQuiz',
        description:
          'A computer, comprising the CPU, memory, and input/output tools, adeptly processes and stores data, catering to a spectrum of tasks, from basic functions to complex operations.',
      }
    case 'geography':
      return {
        id: 4,
        title: 'Geography',
        category: 'geography',
        difficulty: 'Easy',
        quizName: 'geographyQuiz',
        description:
          "Geography studies the Earth's physical features, atmosphere, and human activity. It examines how natural and cultural factors shape landscapes and ecosystems, and how people interact with their environments. Physical geography focuses on natural features, while human geography looks at population distribution and cultural landscapes.",
      }
    default:
      return {
        id: 0,
        title: 'Unknown',
        category: 'unknown',
        difficulty: 'Unknown',
        quizName: 'unknown',
      }
  }
}
