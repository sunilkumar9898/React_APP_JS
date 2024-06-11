import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Service from './Pages/Service';
import Footer from './Components/Footer';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <BrowserRouter>
          <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/service" element={<Service />} />
        </Routes>
        <Footer/>
          </BrowserRouter>
      </>
  );
}

export default App
