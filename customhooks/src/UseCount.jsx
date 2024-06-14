import React,{useState} from 'react'

const UseCount = () => {

    const [count, setCount] = useState(0)
    function Increse () {
        setCount(count+1)
    }
    function Decrease() {
        setCount(count - 1);
    }
  return[count,Increse,Decrease]
}

export default UseCount
