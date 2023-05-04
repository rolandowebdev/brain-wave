import { MenuCard, Navbar } from '@/components'
import { menus } from '@/data'
import { auth } from '@/libs'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()

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
      <Box as="main" mt="44px">
        <VStack spacing={1} alignItems="flex-start" mb="40px">
          <Heading as="h1" letterSpacing="wide">
            Let's Play
          </Heading>
          <Text as="p">Be the first User!</Text>
        </VStack>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={12}>
          {menus.map((menu) => (
            <MenuCard
              key={menu.id}
              id={menu.id}
              category={menu.category}
              title={menu.title}
              difficulty={menu.difficulty}
            />
          ))}
        </Grid>
      </Box>
    </>
  )
}
