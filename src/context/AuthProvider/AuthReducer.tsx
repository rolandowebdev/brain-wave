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
    case 'SIGNOUT': {
      return {
        currentUser: null,
      }
    }
    default:
      return state
  }
}
