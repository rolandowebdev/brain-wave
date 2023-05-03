import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context'
import { ReactNode } from 'react'

interface PrivateRoutesProps {
  children: ReactNode
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="signin" />
}
