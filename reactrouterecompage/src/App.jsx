import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import MainRouter from './Router/MainRouter'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainRouter />
      <Footer />
    </>
  )
}

export default App
