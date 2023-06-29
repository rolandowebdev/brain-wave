import { create } from 'zustand'

interface GeographyState {
  correctAnswer: number
  incorrectAnswers: number
  questionIndex: number
}

interface GeographyActions {
  resetQuestion: () => void
  setCorrectAnswer: (answer: number) => void
  setIncorrectAnswers: (answers: number) => void
  setQuestionIndex: (index: number) => void
}

const initialState: GeographyState = {
  correctAnswer: 0,
  incorrectAnswers: 0,
  questionIndex: 0,
}

export const useGeographyQuiz = create<GeographyState & GeographyActions>()(
  (set) => ({
    ...initialState,
    resetQuestion: () =>
      set((state) => ({
        ...state,
        correctAnswer: 0,
        incorrectAnswers: 0,
        questionIndex: 0,
      })),
    setCorrectAnswer: (answer: number) => set({ correctAnswer: answer }),
    setIncorrectAnswers: (answers: number) =>
      set({ incorrectAnswers: answers }),
    setQuestionIndex: (index: number) => set({ questionIndex: index }),
  })
)
