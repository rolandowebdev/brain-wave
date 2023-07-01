import { MenuCard, Navbar } from '@/components'
import { menus } from '@/data'
import { handleSignOut } from '@/utils/handleSignOut'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar signout={() => handleSignOut(navigate)} />
      <Box as="main" py="44px">
        <VStack spacing={1} alignItems="flex-start" mb="40px">
          <Heading as="h1" letterSpacing="wide">
            Let's Play
          </Heading>
          <Text as="p">Be the first!</Text>
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
