import { Animals, Knowledge, Navbar, VideoGame } from '@/components'
import { useAuth } from '@/context'
import { Box, Heading } from '@chakra-ui/react'

export const Dashboard = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Navbar />
      <Box as="main" mt="44px">
        <Heading as="h1" textAlign="center">
          Welcome {currentUser?.email}
        </Heading>
        <Knowledge />
        <Animals />
        <VideoGame />
      </Box>
    </>
  )
}
