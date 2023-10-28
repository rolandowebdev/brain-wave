import { AuthAction, AuthActionTypes, AuthState } from '@/types'

export const AuthReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SIGNIN: {
      return {
        currentUser: action.payload,
      }
    }
    case AuthActionTypes.SIGNUP: {
      return {
        currentUser: action.payload,
      }
    }
    case AuthActionTypes.LOGOUT: {
      return {
        currentUser: null,
      }
    }
    default:
      return state
  }
}
