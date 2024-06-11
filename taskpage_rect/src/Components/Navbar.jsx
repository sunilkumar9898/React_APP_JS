import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
      <div>
          <div className="navbar">
              <div className="logo">
                  <img src="" alt="" />
              </div>
              <div className='nav_link_ul'>
                  <ul className='nav_link'>
                      <li>
                          <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                          <Link to={"contact"}>Contact</Link>
                      </li>
                      <li>
                          <Link to={"about"}>About</Link>
                      </li>
                      <li>
                          <Link to={"service"}>service</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default Navbar
