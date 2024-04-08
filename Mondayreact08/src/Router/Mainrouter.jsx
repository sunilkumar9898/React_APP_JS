import React from 'react'
import About from '../pages/About';
import Home from '../pages/Home'
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import {Routes , Route} from 'react-router-dom'
import Notfound from '../pages/Notfound';


const Mainrouter = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path='*' element={<Notfound />} />
      </Routes>
  );
}

export default Mainrouter
