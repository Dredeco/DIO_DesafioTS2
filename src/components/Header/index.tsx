import { Center, Text, Container, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return(
    <Container backgroundColor='#fff' minWidth='100vw' minHeight='50px'>
      <Center justifyContent='space-between' alignItems='center'>
        <Text fontSize='3xl' fontWeight='bold' color='#9413dc'>DIO Bank</Text>
        {
        isLoggedIn && (
          <>
          <Button onClick={() => logout()} backgroundColor='red.300'>
            Sair
          </Button>
          </>
        )
      }
      </Center>
    </Container>
  )
}
