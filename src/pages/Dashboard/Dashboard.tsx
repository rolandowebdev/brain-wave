import { MenuCard, Navbar } from '@/components'
import { useAuth } from '@/hooks'
import { menus } from '@/data'
import { handleSignOut } from '@/utils'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  return (
    <>
      <Navbar signout={() => handleSignOut(navigate)} />
      <Box as="main" py="34px">
        <VStack
          spacing={1}
          alignItems="flex-start"
          mb={{ base: '24px', md: '28px', lg: '64px' }}>
          <Text as="p" letterSpacing="wide" fontSize="22px">
            Let's Play!
          </Text>
          <Heading as="h1" fontSize="26px">
            Be the first{' '}
            <Text as="span" textDecor="underline" textTransform="capitalize">
              {currentUser?.displayName}
            </Text>
          </Heading>
        </VStack>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={[6, 10, 10, 12]}>
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
