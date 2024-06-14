import React from 'react'
import { useState } from 'react'
import Hoc from './Hoc'

const Clickcounter = ({count,handlechange}) => {

  return (
    <div>
    <button onClick={handlechange}>click</button>{count}
    </div>
  )
}

export default Hoc(Clickcounter)
