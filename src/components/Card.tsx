import { Box } from "@chakra-ui/react"

export const Card = ({ children }: any) => {
  return(
    <Box 
    backgroundColor='#FFFFFF' 
    borderRadius='25px' 
    padding='15px' 
    marginX='2%' 
    marginTop='1rem'>
      {children}
    </Box>
  )
}