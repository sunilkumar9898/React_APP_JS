import React from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'


import Women from '../pages/Women';
import Girl from '../pages/Girl';
import FreshData from '../pages/FreashData';

const Mainrouter = () => {

  return (
      <div>
          <Routes>
              <Route path={"/"} element={<Women />}></Route>
              <Route path={"/girl"} element={<Girl />}></Route>
              <Route path={"/wo"} element={<FreshData />}></Route>
          </Routes>
      </div>
  );
}

export default Mainrouter
