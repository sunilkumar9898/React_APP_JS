import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <nav>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/"}>Contact</Link>
              <Link to={"/"}>Service</Link>
      </nav>
    </div>
  )
}

export default Navbar
