import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50">
            <ul className="bg-black text-white p-5 flex justify-around">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/service"}>Services</Link>
            </ul>
        </div>
    );
};

export default Navbar;
