import { QuizProps } from '@/types'
import { getBackground, getIllustration } from '@/utils'
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
  Wrap,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const MenuCard = ({ category, title, difficulty }: QuizProps) => {
  const navigate = useNavigate()
  const illustration = getIllustration(category, 'absolute', 'large')
  const background = getBackground(category)
  return (
    <Card
      bgGradient={background}
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
            borderColor="brand.light"
            variant="outline"
            rounded="xl"
            aria-label="Search database"
            icon={<StarIcon color="brand.light" />}
            _hover={{ bgColor: 'transparent' }}
          />
          <Wrap display={['none', 'none', 'none', 'block']}>
            {illustration}
          </Wrap>
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
