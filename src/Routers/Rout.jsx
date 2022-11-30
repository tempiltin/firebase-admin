import React from 'react'
import {  Route, Routes} from 'react-router-dom'
import Register from '../Pages/auth/Register'
import Home from '../Pages/Home'
import NotFound404 from '../Pages/NotFound404'
const Rout = () => {
  return <Routes>
         <Route path='*' element={<NotFound404 />} />
         <Route path='/' element={<Home />} />
         <Route path='/register' element={<Register />} />

      </Routes>
  
 
}

export default Rout