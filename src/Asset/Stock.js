import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import React from 'react'
import Login from './Login';
import SamApp1 from './SamApp1'; 
export default function Stock() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/SamApp1' element={<SamApp1/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    <Login></Login>
    </BrowserRouter>
    </div>
  )
}