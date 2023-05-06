import { create } from 'zustand'

interface ComputerState {
  correctAnswer: number
  incorrectAnswers: number
  questionIndex: number
}

interface ComputerActions {
  resetQuestion: () => void
  setCorrectAnswer: (answer: number) => void
  setIncorrectAnswers: (answers: number) => void
  setQuestionIndex: (index: number) => void
}

const initialState: ComputerState = {
  correctAnswer: 0,
  incorrectAnswers: 0,
  questionIndex: 0,
}

export const useComputerQuiz = create<ComputerState & ComputerActions>()(
  (set) => ({
    ...initialState,
    resetQuestion: () =>
      set((state) => ({
        ...state,
        amountOfQuestion: 0,
        correctAnswer: 0,
        incorrectAnswers: 0,
        notAnswerd: 0,
        questionIndex: 0,
      })),
    setCorrectAnswer: (answer: number) => set({ correctAnswer: answer }),
    setIncorrectAnswers: (answers: number) =>
      set({ incorrectAnswers: answers }),
    setQuestionIndex: (index: number) => set({ questionIndex: index }),
  })
)
