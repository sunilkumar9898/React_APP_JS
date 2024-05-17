import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from '../pages/Men'
import Girl from '../pages/Girls'
import Women from '../pages/Women'
import Card from '../pages/Card'

const Mainrouter = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Men />} />
              <Route path="/about" element={<Girl />} />
              <Route path="/contact" element={<Women />} />
              <Route path="/service" element={<Card />} />
          </Routes>
      </div>
  );
}

export default Mainrouter
