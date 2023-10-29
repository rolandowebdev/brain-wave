import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Ref, forwardRef, useState } from 'react'

interface CustomInputProps {
  type: string
}

export const CustomInput = forwardRef(
  ({ type, ...rest }: CustomInputProps, ref: Ref<HTMLInputElement>) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const switchPasswordType =
      type === 'password' && !show ? 'password' : 'text'
    const checkInputType = type === 'email' ? 'email' : switchPasswordType

    return (
      <InputGroup>
        <Input
          ref={ref}
          type={checkInputType}
          size="sm"
          bg="brand.dark"
          borderColor="brand.border"
          borderRadius="md"
          autoComplete="off"
          required
          {...rest}
        />
        {type === 'password' && (
          <InputRightElement h="full">
            <Button
              size="sm"
              bg="transparent"
              onClick={handleClick}
              _hover={{ bg: 'transparent' }}>
              {show ? (
                <ViewIcon color="brand.light" />
              ) : (
                <ViewOffIcon color="brand.light" />
              )}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    )
  }
)
