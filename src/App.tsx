import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Text,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header';
import { Btn } from './components/Button';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc'>
        <Header />
        <Card>
          <Center flexDirection='column' gap='1rem'>
            <Text fontSize='2xl' fontWeight='bold'>Login</Text>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Btn onClick={login} text='Entrar'/>
          </Center>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
