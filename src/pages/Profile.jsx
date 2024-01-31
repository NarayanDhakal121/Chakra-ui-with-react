import React from 'react'
import {ListIcon,List, ListItem,TabPanel,Tab, Tabs, TabList, TabPanels } from '@chakra-ui/react'
import { EmailIcon , ChatIcon, StarIcon, CheckCircleIcon, WarningIcon} from '@chakra-ui/icons'

const Profile = () => {
  return (
   <>
  
   {/* learning for tab component */}

   <Tabs mt={'40px'} p={'20px'} colorScheme='purple' variant='enclosed'>
    <TabList>
      {/* _selected={{ anything }} this helps in selected element to style*/}
      <Tab _selected={{color: 'white', bg:'purple.400'}}>Account Info</Tab>
      <Tab  _selected={{color: 'white', bg:'purple.400'}}>Task History</Tab>
    </TabList>


    <TabPanels>
      {/*================ for first tab==================== */}
   <TabPanel>
<List spacing={'4'}>
  <ListItem>
<ListIcon as = {EmailIcon}/>
Email:narine@learner.com
  </ListItem>
  <ListItem>
<ListIcon as = {ChatIcon}/>
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  </ListItem>
  <ListItem>
<ListIcon as = {StarIcon}/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, asperiores!
  </ListItem>
</List>
   </TabPanel>
   {/* =========first tab panel ends======== */}

   {/* --------second tab panels starts------ */}

   <TabPanel>
   <List spacing={'4'}>
  <ListItem>
<ListIcon as = {CheckCircleIcon} color={'teal.400'}/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur?
  </ListItem>
  <ListItem>
<ListIcon as = {CheckCircleIcon}/>
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  </ListItem>
  <ListItem>
<ListIcon as = {WarningIcon}/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, asperiores!
  </ListItem>
  <ListItem>
<ListIcon as = {WarningIcon}/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, asperiores!
  </ListItem>
  <ListItem>
<ListIcon as = {CheckCircleIcon}/>
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  </ListItem>
  <ListItem>
<ListIcon as = {CheckCircleIcon}/>
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  </ListItem>
  <ListItem>
<ListIcon as = {WarningIcon}/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, asperiores!
  </ListItem>
</List>
   </TabPanel>
   {/* ========second tab panel ens here========= */}
   
    </TabPanels>
   </Tabs>
   </>
  )
}

export default Profile