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
        <Brainwave size="38" />
        <Link
          as={RouterLink}
          to="/"
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="wide"
          _hover={{
            color: 'green.400',
          }}
          _focus={{ color: 'green.400' }}>
          Brainwave
        </Link>
      </HStack>
      <IconButton
        onClick={onOpen}
        borderColor="brand.light"
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
        <ModalContent>
          <ModalHeader>Sign out</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="p">Do you really wish to leave and sign out?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" onClick={signout}>
              Sign out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  )
}
