import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="bg-gray-600 text-white p-3 font-medium flex justify-around">
                <Link to={"/"}> <span className="text-pink-900 font-bold text-2xl">R</span><span>eact</span><span>JS</span> </Link>
                <Link to={"/"}>Home</Link>
                <Link to={"about"}>About</Link>
                <Link to={"contact"}>Contact</Link>
                <Link to={"service"}>Service</Link>

            </div>
        </div>
    );
};

export default Navbar;
