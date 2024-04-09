import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";


const Navbar = () => {

    let cartValue = JSON.parse(localStorage.getItem("ecomData")) || [];


    return (
        <div className="sticky top-0 z-50">
            <div className="sticky  top-0 p-3 font-medium flex justify-around my-auto shadow-2xl  bg-black text-gray-300 ">
                <div className="">
                    {" "}
                    <Link to={"/"}>
                        <img
                            className=" w-24 h-11"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="w-1/3 flex justify-around my-auto">
                    <Link to={"/"}>Home</Link>
                    <Link to={"about"}>Cart</Link>
                    <Link to={"contact"}>Contact</Link>
                    <Link to={"service"}>Service</Link>
                    <Link to={"about"}>
        {cartValue.length}
                        <PiShoppingCartLight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
