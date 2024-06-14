import React, { useState } from 'react'
import Hoc from './Hoc';

const Hovercounter = ({count,handlechange}) => {

 return (
     <div>
         <button onMouseOver={handlechange}>click</button>
         {count}
     </div>
 );
}

export default Hoc (Hovercounter)
