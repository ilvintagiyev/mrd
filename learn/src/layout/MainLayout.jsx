import React from 'react'

import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
<>
<Navbar></Navbar>
<Outlet></Outlet>



</>
  )
}

export default MainLayout
