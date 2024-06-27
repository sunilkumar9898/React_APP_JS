import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [item,setItem]=useState(10)
  function updatecount () {
     setCount(count+1)
  }
  function updateItem() {
      setItem(item *10);
  }
  const calculate = useMemo(() => {
      console.log("calcualte function");
      return count + 2;
  }, [count]);


  return (
      <>
          <button onClick={updatecount}>count</button>
          {count}
          <br></br>
          <button onClick={updateItem}>Item</button>
          {item}
          <br></br>
          <h2>calcualte:{calculate}</h2>
      </>
  );
}

export default App
