import { Quiz } from '@/types'

export const saveQuizData = (key: any, data: Quiz): void => {
  localStorage.setItem(key, JSON.stringify(data))
}
