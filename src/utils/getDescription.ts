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
          'Animals are multicellular organisms that live in diverse habitats and have a wide range of adaptations. They can be classified into various groups based on characteristics such as body structure, diet, and reproductive strategies. Some animals are domesticated and used for food, clothing, or labor, while others play important ecological roles as pollinators, predators, or prey. The study of animals, or zoology, helps us understand the diversity and complexity of the natural world and our relationship with it.',
      }
    case 'knowledge':
      return {
        id: 2,
        title: 'General Knowledge',
        category: 'knowledge',
        difficulty: 'Medium',
        quizName: 'knowledgeQuiz',
        description:
          'Knowledge is the understanding and awareness of information gained through experience, education, or observation. It can be explicit or tacit, and is constantly evolving as new information is acquired. The pursuit of knowledge is a fundamental aspect of human curiosity and enables us to innovate, problem-solve, and make informed decisions. Knowledge can be applied to many areas of life, from personal growth to scientific research, and is considered an essential resource for personal and societal development.',
      }
    case 'computer':
      return {
        id: 3,
        title: 'Computer',
        category: 'computer',
        difficulty: 'Hard',
        quizName: 'computerQuiz',
        description:
          'A computer is an electronic device that processes and stores data. It consists of a CPU, memory, input/output devices, and storage devices. Together, these components enable computers to perform a wide range of tasks, from basic word processing to complex simulations and calculations.',
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
