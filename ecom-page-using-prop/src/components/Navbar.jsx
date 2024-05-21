import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <nav className="navbar">
              <div className="logo">
                  <img
                      src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                      alt="logo"
                  />
              </div>
              <div className="search">
                  <input type="search" placeholder="Search" />
              </div>
              <div className="nav_link">
                  <Link to={"/"}> MEN </Link>
                  <Link to={"/about"}>GIRL </Link>
                  <Link to={"/contact"}>WOMEN </Link>
              </div>
              <div className="hemburger">
                  <span>&#9776;</span>
              </div>
          </nav>
      </div>
  );
}

export default Navbar
