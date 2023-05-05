import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { useAuth } from '@/context'

interface PrivateRoutesProps {
  children: ReactNode
}

export const PrivateRoutes = ({
  children,
}: PrivateRoutesProps): JSX.Element => {
  const { currentUser } = useAuth()
  return currentUser ? (
    (children as JSX.Element)
  ) : (
    <Navigate to="/signin" replace={true} />
  )
}
