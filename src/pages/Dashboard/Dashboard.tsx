import { useAuth } from '@/context'

export const Dashboard = () => {
  const { currentUser } = useAuth()
  return <div>Welcome {currentUser?.email}</div>
}
