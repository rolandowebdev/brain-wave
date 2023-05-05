import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Result = () => {
  return (
    <>
      <Container
        maxW="lg"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100vh">
        <Heading as="h1">Your Final Result</Heading>
        <Grid templateColumns="repeat(2, 1fr)" w="full" gap={4} mt={8} mb={4}>
          <GridItem>
            <Card align="center" py={2} bg="brand.softDark" color="brand.light">
              <CardBody>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="normal"
                  lineHeight={0}>
                  Correct Answer
                </Heading>
              </CardBody>
              <CardFooter mt={4}>
                <Text color="teal" fontSize="7xl" lineHeight={0}>
                  6
                  <Text as="span" fontSize="lg" color="brand.light">
                    / 10
                  </Text>
                </Text>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card align="center" py={2} bg="brand.softDark" color="brand.light">
              <CardBody>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="normal"
                  lineHeight={0}>
                  Incorrect Answer
                </Heading>
              </CardBody>
              <CardFooter mt={4}>
                <Text color="red.500" fontSize="7xl" lineHeight={0}>
                  4
                  <Text as="span" fontSize="lg" color="brand.light">
                    / 10
                  </Text>
                </Text>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem colSpan={2}>
            <Card align="center" py={2} bg="brand.softDark" color="brand.light">
              <CardBody>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="normal"
                  lineHeight={0}>
                  Not Answerd
                </Heading>
              </CardBody>
              <CardFooter mt={4}>
                <Text color="gray.400" fontSize="7xl" lineHeight={0}>
                  0
                  <Text as="span" fontSize="lg" color="brand.light">
                    / 10
                  </Text>
                </Text>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Link
          as={RouterLink}
          replace={true}
          to="/"
          bg="brand.secondary"
          w="full"
          py={3}
          textAlign="center"
          rounded="md"
          _hover={{ textDecoration: 'none', bg: '#1f7631' }}>
          Back to Dashboard
        </Link>
      </Container>
    </>
  )
}
