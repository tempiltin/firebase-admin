import React from 'react'
import {  Route, Routes} from 'react-router-dom'
import Register from '../Pages/auth/Register'
import Home from '../Pages/Home'

const Rout = () => {
  return <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/register' element={<Register />} />

      </Routes>
  
 
}

export default Rout