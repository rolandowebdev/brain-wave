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

interface MenuCardProps {
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  illustration: JSX.Element
  icon: JSX.Element
}

export const MenuCard = ({
  title,
  difficulty,
  illustration,
  icon,
}: MenuCardProps) => {
  return (
    <Card
      backgroundColor="brand.softDark"
      color="brand.light"
      border="none"
      rounded="2xl"
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
      size="sm">
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
            icon={icon}
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
