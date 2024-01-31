
import React from 'react'
import {Divider,Button,HStack, Heading,Text, Card,CardHeader, CardBody, CardFooter,SimpleGrid, Flex, Box, Avatar } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { EditIcon, ViewIcon } from '@chakra-ui/icons';

const Dashboard = () => {
  const[data, setData] = useState(null);


  useEffect(() =>{
fetch('https://mocki.io/v1/7d590389-b6cb-4181-82e0-ef3dfe5e0c6d')
.then(Response=>Response.json())
.then(data =>setData(data))
console.log(data)
  });
  return (
  <>



 {/* <SimpleGrid columns={'4'} spacing={10} minChildWidth={'250px'}>
     <Box bg='white' h='200px' border='1px solid' >
     <Text color={{sm:'yellow', lg:'red' , xl:'purple'}}>
      Hello
     </Text>
     </Box>
     
     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>

     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>

     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>
     <Box bg='white' h='200px' border='1px solid' ></Box>
 </SimpleGrid> */}


  <SimpleGrid spacing={'10'} minChildWidth={'300px'}>
   {data && data.tasks.map(task=>
    (
      <Card key={task.id}  borderTop={'8px'} borderColor={'purple.400'} bg={'white'} >
<CardHeader>
<Flex gap='5'>
  {/* for left element */}
<Avatar name='img' src='{task.image}'/>
  {/* left end */}

{/* for right element */}
<Box>
<Heading as='h3' size='sm'>
{task.title}
</Heading>
<Text>{task.author}</Text>
</Box>
{/* right end */}
</Flex>

</CardHeader>

<CardBody  color={'gray.400'}>
<Text>{task.description}</Text>
  </CardBody>



{/* Divider seperates  */}
<Divider borderColor={'gray.200'}/>

<CardFooter>

{/* HStack allows us to horizontally Stack the element // allows us little be like flex to put 2/3 elements horizontally*/}

<HStack>
  {/* here lefticon is passed as a prop */}
<Button leftIcon={<ViewIcon/>} variant={'ghost'}>watch</Button>
<Button leftIcon={<EditIcon/>}variant={'ghost'}>Comment</Button>
</HStack>

</CardFooter>

      </Card>
    )) }
  </SimpleGrid>
  
  </>
  )
}

export default Dashboard