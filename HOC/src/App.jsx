import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clickcounter from './Clickcounter'
import Hovercounter from './Hovercounter'

function App() {


  return (
    <>
      <Clickcounter/>
      <Hovercounter/>
    </>
  )
}

export default App
