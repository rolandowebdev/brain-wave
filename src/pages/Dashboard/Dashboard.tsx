import { MenuCard, Navbar } from '@/components'
import { useAuth } from '@/hooks'
import { menus } from '@/data'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '@/libs'
import { AuthActionTypes } from '@/types'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { dispatch, currentUser } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      dispatch({ type: AuthActionTypes.LOGOUT })
      navigate('/signin')
    } catch {
      throw new Error('Failed to sign out!')
    }
  }

  return (
    <>
      <Navbar signout={handleSignOut} />
      <Box as="main" py="28px">
        <VStack spacing={1} alignItems="flex-start" mb="24px">
          <Text as="p" letterSpacing="wide" fontSize="22px">
            Let's Play!
          </Text>
          <Heading as="h1" fontSize="3xl" textTransform="capitalize">
            Be the first {currentUser?.displayName}
          </Heading>
        </VStack>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap="1rem">
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
