import { auth } from '@/libs'
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface AuthContextModel {
  auth: Auth
  user: User | null
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  logOut: () => Promise<void>
  sendPasswordResetEmail?: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextModel => useContext(AuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const signUp = (email: string, password: string): Promise<UserCredential> =>
    createUserWithEmailAndPassword(auth, email, password)

  const signIn = (email: string, password: string): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password)

  const resetPassword = (email: string): Promise<void> =>
    sendPasswordResetEmail(auth, email)

  const logOut = (): Promise<void> => signOut(auth)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) setUser(null)
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const values = {
    user,
    signUp,
    signIn,
    logOut,
    resetPassword,
    auth,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
