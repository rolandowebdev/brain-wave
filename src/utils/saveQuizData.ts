import { Quiz } from '@/models'

export const saveQuizData = (key: any, data: Quiz): void => {
  localStorage.setItem(key, JSON.stringify(data))
}
