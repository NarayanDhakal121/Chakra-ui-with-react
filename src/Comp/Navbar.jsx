import React from 'react'
import { Flex, Box,Heading, Text , Button, Spacer, HStack, Avatar} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'

const Navbar = () => {

   const toast = useToast()
   // const position=[
   //    'top-right'
   // ]

   const showToast=()=>{
      toast({

         title: 'Logged out',
         description: 'suscessfully logged out',
         duration: 3000,
         isClosable: true,
        position: 'top-right',
        icon:<UnlockIcon />
      })
   }

  return (
   <>

<Flex as={'nav'} p={'10px'} mb={'40px'} alignItems={'center'}>
   <Heading as={'h1'}>
    Tasks
   </Heading>
<Spacer /> 

<HStack spacing={'20px'}>
<Avatar/>
<Text>Narine@product.dev</Text>
<Button  colorScheme='purple'
onClick={showToast}

>

    

Logout</Button>
</HStack>

</Flex>

   {/* <Flex  bg='gray.200' justifyContent='space-around' gap='5' wrap={'wrap'}>
    <Box bg={'red.200'} width={'150px'} h={'50px'}>1</Box>
    <Box bg={'blue.200'}width={'150px'} h={'50px'} >2</Box>
    <Box bg={'green.200'} width={'150px'} h={'50px'} flexGrow={'1'}>3</Box>
    <Box bg={'yellow.200'}width={'150px'} h={'50px'} flexGrow={'1'}>4</Box>

   </Flex> */}
   
   </>
  )
}

export default Navbar