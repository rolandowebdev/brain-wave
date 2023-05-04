import {
  Button,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { Logout } from '../Logo'

interface NavbarProps {
  logout: () => Promise<void>
}

export const Navbar = ({ logout }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <HStack h="64px" justifyContent="space-between" alignItems="center">
      <HStack>
        <Text as="span" fontSize="2xl" fontWeight="bold" letterSpacing="wide">
          Brainwave
        </Text>
      </HStack>
      <IconButton
        onClick={onOpen}
        borderColor="brand.light"
        variant="outline"
        rounded="full"
        aria-label="Search database"
        _hover={{
          borderColor: 'brand.primary',
        }}
        icon={<Logout size="19" color="#e6edf3" />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dear User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="p">Do you really wish to leave and log out?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" onClick={logout}>
              Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  )
}
