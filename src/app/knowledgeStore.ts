import { create } from 'zustand'

interface KnowledgeState {
  correctAnswer: number
  incorrectAnswers: number
  questionIndex: number
}

interface KnowledgeActions {
  resetQuestion: () => void
  setCorrectAnswer: (answer: number) => void
  setIncorrectAnswers: (answers: number) => void
  setQuestionIndex: (index: number) => void
}

const initialState: KnowledgeState = {
  correctAnswer: 0,
  incorrectAnswers: 0,
  questionIndex: 0,
}

export const useKnowledgeQuiz = create<KnowledgeState & KnowledgeActions>()(
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
