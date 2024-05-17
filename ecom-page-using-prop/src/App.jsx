import { useState } from 'react'

import './App.css'
import Mainrouter from './router/Mainrouter'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Navbar />
      <Mainrouter />
      <Footer/>
      </>
  );
}

export default App
