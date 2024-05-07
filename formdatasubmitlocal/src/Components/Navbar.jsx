import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <nav className=" bg-black text-white flex justify-end gap-20 p-4   ">
              <Link to={"/"}>SignUp</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/email"}>Email</Link>
          </nav>
      </div>
  );
}

export default Navbar
