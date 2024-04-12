import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";



const Navbar = () => {
    let cartValue = JSON.parse(localStorage.getItem("12/04/2024")) || []
    console.log(cartValue.length);
  return (
      <div className="sticky top-0 z-50">
          <nav className="bg-gray-700 text-white flex gap-20 p-2 justify-around items-center ">
              <div className="flex gap-20">
                  <Link to="/">Home</Link>
                  <Link to="/About">Cart</Link>
                  <Link >Contact</Link>
              </div>
              <div className="flex gap-10 text-2xl font-bold">
                  <Link className="flex items-center" to={""}>
                      <HiOutlineUserCircle />
                  </Link>
                  <Link
                      to={"/About"}
                      className="flex items-center gap-2 "
                     >
                      <span className="bg-orange-400 px-3 py-2 rounded">
                          <IoCartOutline />
                      </span>
                      : <span className="font-medium">{cartValue.length}</span>
                  </Link>
              </div>
          </nav>
      </div>
  );
}

export default Navbar
