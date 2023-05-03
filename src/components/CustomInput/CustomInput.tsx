import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ChangeEventHandler, useState } from 'react'

interface CustomInputProps {
  type: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const CustomInput = ({ type, onChange, ...rest }: CustomInputProps) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const checkInputType = type === 'password' && !show ? 'password' : 'text'

  return (
    <InputGroup>
      <Input
        onChange={onChange}
        type={checkInputType}
        size="sm"
        bg="brand.dark"
        borderColor="brand.border"
        borderRadius="md"
        {...rest}
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
