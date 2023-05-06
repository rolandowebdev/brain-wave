import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

interface AxiosState {
  response: any
  loading: boolean
  error: string
}

export function useAxios({ url }: { url: string }): AxiosState {
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url)
        setResponse(res.data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { response, loading, error }
}
