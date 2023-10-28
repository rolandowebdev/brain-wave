import { useToast } from '@chakra-ui/react'

export const useMessage = () => {
  const toast = useToast()

  const showMessage = (message: string, status: 'success' | 'error') => {
    toast({
      position: 'top-right',
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    })
  }

  return showMessage
}
