import { Center, Text, Container } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Container backgroundColor='#fff' minWidth='100vw' minHeight='50px'>
      <Center>
        <Text fontSize='3xl' fontWeight='bold' color='#9413dc'>DIO Bank</Text>
      </Center>
    </Container>
  )
}
