import { create } from 'zustand'

interface AnimalState {
  questions: Array<any>
  questionDifficulty: string
  amountOfQuestion: number
  correctAnswer: number
  incorrectAnswers: number
  notAnswerd: number
}

interface AnimalActions {
  resetQuestion: () => void
  setQuestionDifficulty: (difficulty: string) => void
  setAmountOfQuestion: (amount: number) => void
  setCorrectAnswer: (answer: number) => void
  setIncorrectAnswers: (answers: number) => void
  setNotAnswerd: (notAnswerd: number) => void
}

const initialState: AnimalState = {
  questions: [],
  questionDifficulty: '',
  amountOfQuestion: 0,
  correctAnswer: 0,
  incorrectAnswers: 0,
  notAnswerd: 0,
}

export const useQuestionStore = create<AnimalState & AnimalActions>((set) => ({
  ...initialState,
  setQuestionDifficulty: (difficulty: string) =>
    set({ questionDifficulty: difficulty }),
  setAmountOfQuestion: (amount: number) => set({ amountOfQuestion: amount }),
  setCorrectAnswer: (answer: number) => set({ correctAnswer: answer }),
  setIncorrectAnswers: (answers: number) => set({ incorrectAnswers: answers }),
  setNotAnswerd: (notAnswerd: number) => set({ notAnswerd: notAnswerd }),
  resetQuestion: () =>
    set((state) => ({
      ...state,
      questions: [],
      questionDifficulty: '',
      amountOfQuestion: 0,
      correctAnswer: 0,
      incorrectAnswers: 0,
      notAnswerd: 0,
    })),
}))
