import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Button, Drawer } from "antd";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="navbar">
                <div className="nav_link">
                    <Link to={"home"}>Home</Link>
                    <Link to={"/"}>product</Link>
                    <Link to={"men"}>men</Link>
                </div>
                <p className="hemburger" onClick={showDrawer}>
                    &#9776;
                </p>
            </div>
            <Drawer
                className="drawer"
                onClose={onClose}
                open={open}
                style={{ backgroundColor: "#f0f2f5" }} // Change background color here
                width={200} // Set width of drawer here
            >
                <Link to={"/"}>Home</Link>
                <Link to={"product"}>product</Link>
                <Link to={"men"}>men</Link>
            </Drawer>
        </>
    );
};

export default Navbar;
