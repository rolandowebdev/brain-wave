import {
  createContext,
  useEffect,
  useReducer,
  ReactNode,
  useContext,
} from 'react'
import { AuthReducer } from './AuthReducer'
import { AuthContextProps, AuthState } from '@/models/authUser'

interface AuthProviderProps {
  children: ReactNode
}

const INITIAL_STATE: AuthState = {
  currentUser: JSON.parse(localStorage.getItem('user') || 'null'),
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  dispatch: () => {
    throw new Error('dispatch function not implemented')
  },
})

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)

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
