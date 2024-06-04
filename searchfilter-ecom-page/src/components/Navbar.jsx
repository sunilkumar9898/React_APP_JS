import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
    <Link to={"/"} >Home</Link>
    <Link to={"product"} >product</Link>
    <Link to={"men"} >men</Link>
    </div>
  )
}

export default Navbar
