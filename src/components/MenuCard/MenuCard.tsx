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
  illustration: JSX.Element
  icon: JSX.Element
}

export const MenuCard = ({ illustration, icon }: MenuCardProps) => {
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
            <Text as="p">Level 2</Text>
            <Heading fontSize="2xl" letterSpacing="wide">
              Travel Newbie
            </Heading>
          </VStack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
