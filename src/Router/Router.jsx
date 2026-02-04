import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home , Services } from '../Pages'


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router