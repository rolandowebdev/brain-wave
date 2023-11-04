import { QuizProps } from '@/types'
import { getBackground, getIllustration } from '@/utils'
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { BookCopy, Cat, Globe2, Computer } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const MenuCard = ({ category, title, difficulty }: QuizProps) => {
  const navigate = useNavigate()
  const illustration = getIllustration(category)
  const background = getBackground(category)

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'animals':
        return <Cat />
      case 'knowledge':
        return <BookCopy />
      case 'computer':
        return <Computer />
      case 'geography':
        return <Globe2 />
      default:
        throw new Error('Icon not found')
    }
  }

  return (
    <Card
      p="6px"
      size="sm"
      bgGradient={background}
      color="brand.light"
      border="none"
      rounded="lg"
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
      onClick={() => navigate(`/${category}`)}
      transitionDuration="300ms"
      userSelect="none"
      _hover={{
        cursor: 'pointer',
        transform: 'translateY(-2px)',
      }}>
      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: 'column', sm: 'row' }}>
        <CardBody
          h="full"
          display="flex"
          flexDir="column"
          alignItems={{ base: 'center', sm: 'flex-start' }}
          justifyContent="space-between">
          <IconButton
            p={2}
            w="fit-content"
            aspectRatio="1/1"
            borderColor="brand.light"
            borderWidth={2}
            variant="outline"
            rounded="full"
            aria-label="Icon Card"
            mb="1rem"
            icon={getIcon(category)}
            _hover={{ bgColor: 'transparent' }}
          />
          <VStack alignItems={{ base: 'center', sm: 'flex-start' }}>
            <Text as="p" fontWeight="bold">
              {difficulty}
            </Text>
            <Heading fontSize={{ base: '2rem', sm: '1.5rem', md: '2rem' }}>
              {title}
            </Heading>
          </VStack>
        </CardBody>
        <CardFooter>
          <Wrap h="155px" w="155px">
            <Image src={illustration?.image} alt={illustration?.name} />
          </Wrap>
        </CardFooter>
      </Box>
    </Card>
  )
}
