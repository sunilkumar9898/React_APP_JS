import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

const nav = () => {
    let navbar = document.getElementById("nav_link");
    let displayStyle = window.getComputedStyle(navbar).display;

    if (displayStyle === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
};


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
              <div className="nav_link" id="nav_link">
                  <Link to={"/"}> Men </Link>
                  <Link to={"/about"}>Girl </Link>
                  <Link to={"/contact"}>Women </Link>
              </div>
              <div className="hemburger" onClick={nav}>
                  <span>&#9776;</span>
              </div>
          </nav>

      </div>
  );
}

export default Navbar
