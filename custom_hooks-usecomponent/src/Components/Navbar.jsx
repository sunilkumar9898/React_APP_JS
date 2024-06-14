import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"girl"}>Girl</Link>
                <Link to={"women"}>Women</Link>
            </nav>
        </div>
    );
};

export default Navbar;
