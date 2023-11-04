import {
  Button,
  HStack,
  IconButton,
  Link,
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
import { Link as RouterLink } from 'react-router-dom'
import { Brainwave, SignOut } from '../Logo'

type NavbarProps = {
  signout: () => Promise<void>
}

export const Navbar = ({ signout }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HStack h="64px" justifyContent="space-between" alignItems="center">
      <HStack>
        <Brainwave size="32" />
        <Link
          as={RouterLink}
          to="/"
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="wide">
          Brainwave
        </Link>
      </HStack>
      <IconButton
        onClick={onOpen}
        borderColor="brand.light"
        borderWidth={2}
        variant="outline"
        rounded="full"
        aria-label="Search database"
        _hover={{
          bgColor: 'green.400',
          borderColor: 'green.400',
        }}
        _focus={{ bgColor: 'green.400', borderColor: 'green.400' }}
        icon={<SignOut size="19" color="#e6edf3" />}
      />
      <Modal
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={onClose}
        isCentered>
        <ModalOverlay />
        <ModalContent mx={4} rounded="lg">
          <ModalHeader>Sign Out</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="p">Do you really wish to leave and sign out?</Text>
          </ModalBody>
          <ModalFooter display="flex" alignItems="center" gap={2}>
            <Button variant="solid" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="solid"
              bgColor="brand.red"
              color="brand.light"
              _hover={{ bgColor: '#c23737' }}
              onClick={signout}>
              Sign Out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  )
}
