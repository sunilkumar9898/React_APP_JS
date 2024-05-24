import { useState } from 'react'

import './App.css'
import Mainrouter from './mainrouter/Mainrouter'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar />
<Mainrouter />
  </>
  )
}

export default App
