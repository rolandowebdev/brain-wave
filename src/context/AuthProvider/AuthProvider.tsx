import { createContext, useEffect, useReducer, ReactNode } from 'react'
import { AuthContextProps, AuthState } from '@/types'
import { AuthReducer } from './AuthReducer'

interface AuthProviderProps {
  children: ReactNode
}

const parseJSON = (data: string | null): any => {
  try {
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return null
  }
}

const INITIAL_STATE: AuthState = {
  currentUser: parseJSON(localStorage.getItem('user')),
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  dispatch: () => {
    throw new Error('dispatch function not implemented')
  },
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.currentUser))
  }, [state.currentUser])

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
