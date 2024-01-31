import React from 'react'
import { List , ListIcon,ListItem} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
const Sidebarr = () => {
  return (
   <>
   <List  color={'white'} fontSize={'1.2em'} spacing={4}>
    <ListItem>
      <NavLink to='/'>
        <ListIcon as={CalendarIcon} color={'white'}/>
        Dashboard
      </NavLink>
    </ListItem>
    <ListItem>
      <NavLink to='/create'>
        <ListIcon as={EditIcon} color={'white'}/>
        New Task
      </NavLink>
    </ListItem>
    <ListItem>
      
      <NavLink to='profile'>
        <ListIcon as={AtSignIcon} color={'white'}/>
        profile
      </NavLink>
    </ListItem>
   </List>
   </>
  )
}

export default Sidebarr
