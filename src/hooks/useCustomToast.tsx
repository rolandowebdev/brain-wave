import { Alert, AlertIcon, Text, useToast } from '@chakra-ui/react'

export const useCustomToast = (): any => {
  const toast = useToast()
  const TIMER = 1500
  return (title: string, status: 'success') => {
    toast({
      status,
      duration: TIMER,
      render: () => (
        <Alert status={status}>
          <AlertIcon />
          <Text as="p" color="brand.primary">
            {title}
          </Text>
        </Alert>
      ),
    })
  }
}
