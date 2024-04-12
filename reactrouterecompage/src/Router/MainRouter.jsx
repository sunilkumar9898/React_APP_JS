import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Routes, Route } from "react-router-dom";
import CartDetails from "../pages/CartDetails";
import Payment from "../pages/Payment";

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/about"} element={<About />}></Route>
                <Route path={"/contact"} element={<Contact />}></Route>
                <Route path="/carddetails" element={<CartDetails />}></Route>
                <Route path="/payment" element={<Payment />}></Route>
            </Routes>
        </div>
    );
};

export default MainRouter;
