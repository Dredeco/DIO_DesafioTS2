import { Button } from '@chakra-ui/button'
import React from 'react'

interface IBtn {
    onClick?: () => void;
    text: string
}

export const Btn = ({onClick, text}:IBtn) => {
  return (
    <Button fontSize='md' _hover={{backgroundColor: '#540b7c'}} textTransform='uppercase' onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        {text}
    </Button>
  )
}
