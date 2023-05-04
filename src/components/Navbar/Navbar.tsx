import { HStack, IconButton, Text } from '@chakra-ui/react'
import { Logout } from '../Logo'

export const Navbar = () => {
  return (
    <HStack h="64px" justifyContent="space-between" alignItems="center">
      <HStack>
        <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="wide">
          Brainwave
        </Text>
      </HStack>
      <IconButton
        _hover={{
          borderColor: 'brand.primary',
        }}
        borderColor="brand.light"
        variant="outline"
        rounded="full"
        aria-label="Search database"
        icon={<Logout size="19" color="#e6edf3" />}
      />
    </HStack>
  )
}
