import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Girl from './pages/Girl';
import Women from './pages/Women';
import Footer from './Components/Footer';



function App() {
  return (
      <>

          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="girl" element={<Girl />} />
                  <Route path="women" element={<Women />} />
              </Routes>
              <Footer/>
          </BrowserRouter>
      </>
  );
}

export default App
