import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'

const App = () => {

  const router= createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout/>}>
      <Route path='create' element={<Create/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route index element={<Dashboard/>}/>
     </Route>
    )
  )
  return (
   <>
   <RouterProvider  router={router}/>
   </>
  )
}

export default App