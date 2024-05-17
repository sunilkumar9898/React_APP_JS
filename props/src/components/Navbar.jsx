import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <nav>
              <Link to={"/"}>home</Link>
              <Link to={"/card"}>card</Link>
              <Link to={"/card1"}>card1</Link>
          </nav>
      </div>
  );
}

export default Navbar
