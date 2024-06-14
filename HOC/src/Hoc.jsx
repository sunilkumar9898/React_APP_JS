import { useState } from "react"

const Hoc = (Oldcomponent) => {
    return function Encher () {
        const [count, setCount] = useState(0)
        return (
            <Oldcomponent count={ count} handlechange={(()=>{setCount(count+1)})} />
        )
    }

}
export default Hoc;