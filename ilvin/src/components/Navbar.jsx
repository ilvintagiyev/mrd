import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'

function Navbar() {
  return (
    <>
    <nav>
    <ul className='general'>
        <li><Link to={"/Add"}>AddProduct</Link></li>
        <li><Link to={"/Admin"}>Admin</Link></li>
        <li><Link to={"/"}>Data</Link></li>
     </ul>
    </nav>
    </>
  )
}

export default Navbar
