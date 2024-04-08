import React from "react";

const Nav = () => {
    return (
        <div className="container m-auto mt-5 flex justify-between border bg-teal-500">
            <div>
                <img
                    className="w-12 "
                    src="https://png.pngtree.com/templates/sm/20180611/sm_5b1edb6d03c39.jpg"
                    alt="logo"
                />
            </div>
            <div className="w-1/2 flex justify-around my-auto text-white font-bold">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Project</a>
                <a href="">Services</a>
            </div>
        </div>
    );
};

export default Nav;
