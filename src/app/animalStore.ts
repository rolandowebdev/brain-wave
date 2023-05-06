import { Question } from '@/models'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AnimalState {
  questions: Question[]
  correctAnswer: number
  incorrectAnswers: number
  notAnswered: number
  questionIndex: number
}

interface AnimalActions {
  resetQuestion: () => void
  setCorrectAnswer: (answer: number) => void
  setIncorrectAnswers: (answers: number) => void
  setNotAnswered: (notAnswered: number) => void
  setQuestionIndex: (index: number) => void
}

const initialState: AnimalState = {
  questions: [],
  correctAnswer: 0,
  incorrectAnswers: 0,
  notAnswered: 0,
  questionIndex: 0,
}

export const useAnimalQuiz = create<AnimalState & AnimalActions>()(
  persist(
    (set) => ({
      ...initialState,
      resetQuestion: () =>
        set((state) => ({
          ...state,
          questions: [],
          amountOfQuestion: 0,
          correctAnswer: 0,
          incorrectAnswers: 0,
          notAnswered: 0,
          questionIndex: 0,
        })),
      setCorrectAnswer: (answer: number) => set({ correctAnswer: answer }),
      setIncorrectAnswers: (answers: number) =>
        set({ incorrectAnswers: answers }),
      setNotAnswered: (notAnswered: number) =>
        set({ notAnswered: notAnswered }),
      setQuestionIndex: (index: number) => set({ questionIndex: index }),
    }),
    {
      name: 'animalQuiz',
    }
  )
)
