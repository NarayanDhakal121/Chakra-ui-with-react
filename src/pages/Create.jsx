// import React from 'react'
// import { Form, redirect } from 'react-router-dom'
// import { Button, Checkbox,Textarea, Input, Box , FormControl, FormLabel, FormHelperText} from '@chakra-ui/react'
// export default function Create()  {
//   return (
//     <>


//     <Box maxW={'480px'}>

//  <Form method='post' action='/create'> 
// <FormControl isRequired mb={'40px'}>
// <FormLabel>Task Name</FormLabel>
// <Input type='text' name="title" />


// <FormHelperText>
// Enter the descriptive task name.
// </FormHelperText>
// </FormControl>


// {/* for placeholder */}

// <FormControl>
//   <FormLabel>
// Task Description
//   </FormLabel>
//   <Textarea placeholder='Enter a detailed task name.'  name='description'>

//   </Textarea>
// </FormControl>

// {/* for checkbox */}

// <FormControl display={'flex'} alignItems={'center'} mb='40px'> 
//   <Checkbox
//   name='isPriority'
//   size={'lg'}
//   colorScheme='purple'/>

// <FormLabel  mb='0' ml='10px'>Make this a Priority Task</FormLabel>

// </FormControl>

// <Button type='submit'>Submit</Button>

//     </Form>

//     </Box>
   
    
//     </>
//   )
// }

// export const createAction= async({request})=>{
//   const data= await request.formData()

// const task={
//   title:data.get('title'),
//   description:data.get('description'),
//   isPrio:data.get('isPriority')===''
// }
// console.log(task)
// return redirect('/')
// }


import React, { useState } from 'react'
import { Button, Checkbox, Textarea, Input, Box , FormControl, FormLabel, FormHelperText} from '@chakra-ui/react'

export default function Create()  {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPriority, setIsPriority] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const task = {
      title,
      description,
      isPriority
    };
    console.log(task);
    // replace with your actual redirection logic
    // return redirect('/')
  }

  return (
    <Box maxW={'480px'}>
      <form onSubmit={handleSubmit}> 
        <FormControl isRequired mb={'40px'}>
          <FormLabel>Task Name</FormLabel>
          <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          <FormHelperText>Enter the descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Task Description</FormLabel>
          <Textarea placeholder='Enter a detailed task name.' value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>

        <FormControl display={'flex'} alignItems={'center'} mb='40px'> 
          <Checkbox name='isPriority' size={'lg'} colorScheme='purple' isChecked={isPriority} onChange={(e) => setIsPriority(e.target.checked)} />
          <FormLabel mb='0' ml='10px'>Make this a Priority Task</FormLabel>
        </FormControl>

        <Button type='submit'>Submit</Button>
      </form>
    </Box>
  )
}
