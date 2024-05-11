import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


function MainLayouts() {
  return (
    
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default MainLayouts
