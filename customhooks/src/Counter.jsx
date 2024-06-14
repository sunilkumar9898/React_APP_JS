import React, { useState } from 'react'
import UseCount from './UseCount';

const Counter = () => {
    const[count,Increse,Decrease]=UseCount()

  return (
      <div>
          <button onClick={Increse}>add</button>{count}
          <button onClick={Decrease}>minus</button>
      </div>
  );
}

export default Counter
