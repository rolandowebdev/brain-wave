import { AuthAction, AuthState } from '@/types'

export const AuthReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'SIGNIN': {
      return {
        currentUser: action.payload,
      }
    }
    case 'SIGNUP': {
      return {
        currentUser: action.payload,
      }
    }
    case 'LOGOUT': {
      return {
        currentUser: null,
      }
    }
    default:
      return state
  }
}
