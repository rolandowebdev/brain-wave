import { User } from 'firebase/auth'
import { Dispatch } from 'react'

export enum AuthActionTypes {
  SIGNIN = 'SIGNIN',
  SIGNUP = 'SIGNUP',
  LOGOUT = 'LOGOUT',
}

export type AuthAction = {
  type: AuthActionTypes
  payload?: any
}

export type AuthContextProps = {
  currentUser: User | null
  dispatch: Dispatch<AuthAction>
}

export type AuthState = {
  currentUser: User | null
}
