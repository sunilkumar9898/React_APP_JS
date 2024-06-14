import React from "react";
import "./App.css";
import SignupCard from "./pages/Registration";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleCard from "./pages/Login";
import { ContactUs } from "./pages/Email";
import UseRef from "./pages/UseRef";

function App() {


    return (
        // <BrowserRouter>
        //     <div>
        //         <Navbar />
        //         <Routes>
        //             <Route path="/" element={<SignupCard />} />
        //             <Route path="/login" element={<SimpleCard />} />
        //             <Route path="/email" element={<ContactUs/>} />
        //         </Routes>
        //     </div>
        // </BrowserRouter>
        <UseRef/>
    );
}

export default App;
