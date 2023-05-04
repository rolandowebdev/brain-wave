import { QuizProps } from '@/models'
import { StarIcon } from '@chakra-ui/icons'
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Animals, Computer, Knowledge, Geography } from '../Logo'
import { useNavigate } from 'react-router-dom'

const getIllustration = (title: string): JSX.Element => {
  switch (title) {
    case 'Animals':
      return <Animals position="absolute" height="150" width="150" />
    case 'General Knowledge':
      return <Knowledge position="absolute" height="150" width="150" />
    case 'Computer':
      return <Computer position="absolute" height="150" width="150" />
    case 'Geography':
      return <Geography position="absolute" height="150" width="150" />
    default:
      return <div />
  }
}

export const MenuCard = ({ category, title, difficulty }: QuizProps) => {
  const navigate = useNavigate()
  const illustration = getIllustration(title)
  return (
    <Card
      backgroundColor="brand.softDark"
      color="brand.light"
      border="none"
      rounded="2xl"
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
      size="sm"
      onClick={() => navigate(`/${category}`)}
      _hover={{ cursor: 'pointer' }}>
      <Stack>
        <CardBody position="relative">
          <IconButton
            _hover={{
              borderColor: 'brand.primary',
            }}
            borderColor="brand.light"
            variant="outline"
            rounded="xl"
            aria-label="Search database"
            icon={<StarIcon />}
          />
          {illustration}
        </CardBody>
        <CardFooter>
          <VStack alignItems="flex-start">
            <Text as="p">{difficulty}</Text>
            <Heading fontSize="2xl" letterSpacing="wide">
              {title}
            </Heading>
          </VStack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
