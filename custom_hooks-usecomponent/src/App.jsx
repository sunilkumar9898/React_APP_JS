import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Girl from './pages/Girl';
import Women from './pages/Women';
import Footer from './Components/Footer';
import ScrollToTop from "react-scroll-to-top";




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
              <Footer />
              <div style={{ marginTop: "2vh",marginLeft:'0px' }} />
              <ScrollToTop
                  smooth
                  viewBox="0 0 24 24"
                  svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
              />
          </BrowserRouter>
      </>
  );
}

export default App
