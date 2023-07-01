import { auth } from '@/libs'
import { signOut } from 'firebase/auth'
import { NavigateFunction } from 'react-router-dom'

export const handleSignOut = async (navigate: NavigateFunction) => {
  try {
    await signOut(auth)
    localStorage.clear()
    navigate('/signin')
  } catch {
    throw new Error('Failed to sign out!')
  }
}
