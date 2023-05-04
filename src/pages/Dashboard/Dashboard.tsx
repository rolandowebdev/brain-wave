import {
  Animals,
  Knowledge,
  MenuCard,
  Navbar,
  Computer,
  Geography,
} from '@/components'
import { CheckIcon, LockIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Box as="main" mt="44px">
        <VStack spacing={1} alignItems="flex-start" mb="40px">
          <Heading as="h1" letterSpacing="wide">
            Let's Play
          </Heading>
          <Text as="p">Be the first!</Text>
        </VStack>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={12}>
          <MenuCard
            title="Animals"
            difficulty="Easy"
            icon={<CheckIcon />}
            illustration={<Animals height="150" width="150" />}
          />
          <MenuCard
            title="General Knowledge"
            difficulty="Medium"
            icon={<StarIcon />}
            illustration={<Knowledge height="150" width="150" />}
          />
          <MenuCard
            title="Computer"
            difficulty="Hard"
            icon={<LockIcon />}
            illustration={<Computer height="150" width="150" />}
          />
          <MenuCard
            title="Geography"
            difficulty="Hard"
            icon={<LockIcon />}
            illustration={<Geography height="150" width="150" />}
          />
        </Grid>
      </Box>
    </>
  )
}
