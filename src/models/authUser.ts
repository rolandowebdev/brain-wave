import { User } from 'firebase/auth'
import { Dispatch } from 'react'

export interface AuthContextProps {
  currentUser: User | null
  dispatch: Dispatch<AuthAction>
}

export interface AuthAction {
  type: 'SIGNIN' | 'SIGNOUT'
  payload?: any
}

export interface AuthState {
  currentUser: User | null
}
