import { CustomInput, GithubLogo } from '@/components'
import {
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

export const SignUp = () => {
  return (
    <Center>
      <Stack spacing="4">
        <VStack as="header" spacing="6" mt="8">
          <GithubLogo />
          <Heading as="h1" fontWeight="300" fontSize="24px">
            Sign up to Brainwave
          </Heading>
        </VStack>
        <Card
          bg="brand.softDark"
          color="brand.light"
          variant="outline"
          borderColor="brand.border"
          w="308px">
          <CardBody display="flex" gap={4} flexDir="column" as="form">
            <FormControl as="fieldset">
              <FormLabel fontSize="sm">Email address</FormLabel>
              <CustomInput type="text" />
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel fontSize="sm">Password</FormLabel>
              <CustomInput type="password" />
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel fontSize="sm">Confirm Password</FormLabel>
              <CustomInput type="password" />
            </FormControl>
            <Button
              bg="brand.secondary"
              fontWeight="300"
              size="sm"
              _hover={{ bg: 'brand.secondary' }}
              _active={{ bg: 'brand.secondary' }}>
              Sign up
            </Button>
          </CardBody>
        </Card>
        <Card
          variant="outline"
          color="brand.light"
          bgColor="brand.dark"
          borderColor="brand.border">
          <CardBody>
            <Center>
              <HStack fontSize="sm" spacing="1">
                <Text>Already have an account?</Text>
                <Link isExternal color="brand.primary" href="#">
                  Sign in.
                </Link>
              </HStack>
            </Center>
          </CardBody>
        </Card>
      </Stack>
    </Center>
  )
}
