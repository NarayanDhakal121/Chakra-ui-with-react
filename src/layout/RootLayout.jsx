import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Sidebarr from '../Comp/Sidebarr'
import { Outlet } from 'react-router-dom'
import Navbar from '../Comp/Navbar'

const RootLayout = () => {
  return (
 <>
 <Grid templateColumns= 'repeat(6, 1fr)' bg={'gray.50'}>
 
 <GridItem
 as={'aside'}
 colSpan={{base:6, lg:2, xl:1}}
 bg='brand.400'
 minHeight={{ lg: '100vh' }}
 p={{base:'20px', lg:'30px'}}>
 <Sidebarr/>
 </GridItem>

<GridItem 
as={'main'}
colSpan={{base:6, lg:4, xl:5}}
p={'40px'}>
<Navbar/>
 <Outlet/>
</GridItem>

 </Grid>
 

 </>
  )
}

export default RootLayout