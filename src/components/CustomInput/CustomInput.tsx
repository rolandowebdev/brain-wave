import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'

interface CustomInputProps {
  type: string
}

export const CustomInput = ({ type }: CustomInputProps) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const checkInputType = type === 'password' && !show ? 'password' : 'text'

  return (
    <InputGroup>
      <Input
        type={checkInputType}
        size="sm"
        bg="brand.dark"
        borderColor="brand.border"
        borderRadius="md"
      />
      {type === 'password' && (
        <InputRightElement h="full">
          <Button
            size="sm"
            bg="transparent"
            onClick={handleClick}
            _hover={{ bg: 'transparent' }}>
            {show ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  )
}
