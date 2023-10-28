import { User } from 'firebase/auth'
import { Dispatch } from 'react'

export interface AuthContextProps {
  currentUser: User | null
  dispatch: Dispatch<AuthAction>
}

export interface AuthAction {
  type: 'SIGNIN' | 'SIGNUP' | 'LOGOUT'
  payload?: any
}

export interface AuthState {
  currentUser: User | null
}
