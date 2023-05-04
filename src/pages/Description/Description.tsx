import { Animals, Computer, Geography, Knowledge, Navbar } from '@/components'
import { auth } from '@/libs'
import { QuizProps } from '@/models'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useNavigate, useParams } from 'react-router-dom'

const getDescription = (category: any): QuizProps => {
  switch (category) {
    case 'animals':
      return {
        id: 1,
        title: 'Animals',
        category: 'animals',
        difficulty: 'Easy',
        description:
          'Animals are living organisms that come in a wide range of shapes and sizes, found in almost every habitat on Earth. They are able to move using muscles and limbs, allowing them to find food, mates, and shelter, as well as avoid predators. Animals obtain their food by consuming other organisms and require water, air, and shelter to survive. They are classified into different groups based on their characteristics, such as their body structure, reproductive strategies, and behavior.',
      }
    case 'knowledge':
      return {
        id: 2,
        title: 'General Knowledge',
        category: 'knowledge',
        difficulty: 'Medium',
        description:
          'Knowledge is a broad term that refers to the information, skills, and understanding that we acquire through education, experience, and observation. It is the accumulation of facts, ideas, and concepts that enable us to make sense of the world around us and to make informed decisions. Knowledge can be classified into different categories, such as theoretical knowledge, practical knowledge, and experiential knowledge. It is often viewed as a valuable asset that can be used to solve problems, innovate, and achieve goals. However, knowledge is also dynamic and constantly evolving, as new discoveries are made and new ideas are formed.',
      }
    case 'computer':
      return {
        id: 3,
        title: 'Computer',
        category: 'computer',
        difficulty: 'Hard',
        description:
          'A computer is an electronic device that is capable of processing and storing data. It consists of hardware components, such as a central processing unit (CPU), memory, and storage devices, as well as software programs that allow users to perform various tasks, such as word processing, web browsing, and gaming. Computers can be classified into different types, such as desktops, laptops, and tablets, and they are used in a wide range of applications, including business, education, entertainment, and research. With the advent of the internet, computers have become an integral part of our daily lives, allowing us to communicate with others, access information, and perform tasks from virtually anywhere in the world.',
      }
    case 'geography':
      return {
        id: 4,
        title: 'Geography',
        category: 'geography',
        difficulty: 'Easy',
        description:
          'Geography is a field of study that focuses on the earth and its physical and human features. It is concerned with understanding the relationships between natural phenomena, such as landforms, climate, and ecosystems, and human activities, such as population distribution, economic development, and cultural practices. Geographers use a variety of tools and techniques, including maps, remote sensing, and geographic information systems (GIS), to gather and analyze data. The knowledge and insights gained through the study of geography are used to address a wide range of global issues, such as climate change, natural resource management, and urban planning.',
      }
    default:
      return {
        id: 0,
        title: 'Unknown',
        category: 'unknown',
        difficulty: 'Unknown',
      }
  }
}

const getIllustration = (category: any): JSX.Element => {
  switch (category) {
    case 'animals':
      return <Animals height="150" width="150" />
    case 'knowledge':
      return <Knowledge height="150" width="150" />
    case 'computer':
      return <Computer height="150" width="150" />
    case 'geography':
      return <Geography height="150" width="150" />
    default:
      return <div />
  }
}

export const Description = () => {
  const navigate = useNavigate()
  const { category } = useParams()
  const categoryData = getDescription(category)
  const illustration = getIllustration(category)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      navigate('/signin')
    } catch {
      console.log('Failed to sign out!')
    }
  }
  return (
    <>
      <Navbar logout={handleLogout} />
      <HStack mt="44px" justifyContent="space-between" alignItems="center">
        <IconButton
          borderColor="brand.light"
          variant="outline"
          rounded="full"
          aria-label="Search database"
          onClick={() => navigate('/')}
          _hover={{
            borderColor: 'brand.light',
          }}
          _focus={{ backgroundColor: 'transparent' }}
          icon={<CloseIcon fontSize="sm" />}
        />
      </HStack>
      <Box as="main" mt="40px">
        <Stack spacing={4}>
          <Heading as="h1" letterSpacing="wide">
            {categoryData.title}
          </Heading>
          {illustration}
          <Text as="p">{categoryData.description}</Text>
          <Button colorScheme="teal" size="lg" fontWeight="normal" w={36}>
            Game
          </Button>
        </Stack>
      </Box>
    </>
  )
}
