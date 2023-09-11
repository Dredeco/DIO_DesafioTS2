import { Box, Center, Input, Text } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { Card } from '../components/Card'
import { Btn } from '../components/Button'
import { login } from '../services/login'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'

export const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
      const loggedIn = await login(email, password)

      if(!loggedIn){
        return alert('Email ou Senha inválidos')
      }

      setIsLoggedIn(true)
      changeLocalStorage({ login: true })
      navigate('/conta/1')
    }


  return (
    <Box minHeight='100vh' paddingTop='1rem' backgroundColor='#9413dc'>
        <Card>
            <Center flexDirection='column' gap='1rem'>
                <Text fontSize='2xl' fontWeight='bold'>Login</Text>
                <Input placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input type='password' placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
                <Btn onClick={() => validateUser(email, password)} text='Entrar'/>
            </Center>
        </Card>
    </Box>
  )
}
