import React from "react";
import "./App.css";
import SignupCard from "./pages/Registration";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleCard from "./pages/Login";

function App() {


    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<SignupCard />} />
                    <Route path="/login" element={<SimpleCard />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
