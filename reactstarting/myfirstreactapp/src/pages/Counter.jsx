import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
        const handleClick1 = () => {
            setCount(count - 1);
    };

            const handleClick2 = () => {
                setCount(0);
            };

  return (
    <div>
          <p>you clicked button {count} times</p>
          <button onClick={handleClick}>Click Me</button>
          <button onClick={handleClick1}>Reduce</button>
          <button onClick={handleClick2}>Reduce</button>
    </div>
  )
}

export default Counter
