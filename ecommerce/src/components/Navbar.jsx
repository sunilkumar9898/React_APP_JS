import React from "react";
import logo from "../img/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    let cartData = JSON.parse(localStorage.getItem("ecommercedata")) || [];


    return (
        <div>
            <nav className="  flex fixed bg-gray-200 top-0 items-center justify-around w-full border-b shadow-xl shadow-slate-500 z-10 ">
                <div>
                    <img className="w-20 " src={logo} alt="Logo" />
                </div>
                <div className="w-1/2 my-auto navbar  ">
                    <ul className="flex justify-between font-bold navbar cursor-pointer  ">
                        <Link to={"/"}>Home</Link>
                        <Link>About</Link>
                        <Link to={"/product"}>Product</Link>
                        <Link>Service</Link>
                        <Link to={"/card"}>Cart</Link>
                    </ul>
                </div>
                <div className=" mr-16 font-bold flex gap-2">
                    <span className="hemburger">&#9776;</span>
                    <span className="font-bold text-2xl">
                        <AiOutlineShoppingCart />
                    </span>
                    <span id="cartValue" className="font-bold text-2xl">
                        {cartData.length}
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
