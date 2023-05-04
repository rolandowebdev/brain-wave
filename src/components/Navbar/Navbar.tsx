import { HStack, Text } from '@chakra-ui/react'
import { Github } from '../Logo'

export const Navbar = () => {
  return (
    <HStack h="64px" justifyContent="space-between" alignItems="center">
      <HStack>
        <Github size="34" />
        <Text as="span" fontSize="xl">
          Brainwave
        </Text>
      </HStack>
      <Text>Logout</Text>
    </HStack>
  )
}
