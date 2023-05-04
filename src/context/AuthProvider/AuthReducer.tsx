import { AuthAction, AuthState } from '@/models/authUser'

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
    case 'LOGOUT': {
      return {
        currentUser: null,
      }
    }
    default:
      return state
  }
}
