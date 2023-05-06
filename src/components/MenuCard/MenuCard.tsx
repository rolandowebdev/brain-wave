import { QuizProps } from '@/models'
import { getIllustration } from '@/utils'
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
import { useNavigate } from 'react-router-dom'

export const MenuCard = ({ category, title, difficulty }: QuizProps) => {
  const navigate = useNavigate()
  const illustration = getIllustration(category, 'absolute', 'large')
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
