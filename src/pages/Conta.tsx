import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { api } from '../api'
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import { CardInfo } from '../components/CardInfo'

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: string,
    id: string
}

export const Conta = () => {
    const [ userData, setUserData ] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
      const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
      }

      getData()
    }, [])

    const actualData = new Date()

    if(userData && id !== userData.id) {
      navigate('/')
    }

  return (
    <Center>
      <SimpleGrid backgroundColor='purple' alignContent='center' columns={2} spacing={8} padding={5} height='80vh'>
        {
          userData === undefined || userData === null ?
          (
            <Center>
              <Spinner size='xl' color='white'/>
            </Center>
          ) :
          (
            <>
              <CardInfo mainContent={`Bem vindo ${userData.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} às ${actualData.getHours()}:${actualData.getMinutes()}`} />

              <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
            </>
          )
        }
      </SimpleGrid>
    </Center>
  )
}
