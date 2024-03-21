import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import Design from './Pages/Design'
import Properties from './Pages/Properties'
import SearchPage from './Pages/SearchPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/property' element={<Properties/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<ContactUs/>} />
    </Routes>
  )
}

export default AllRoutes