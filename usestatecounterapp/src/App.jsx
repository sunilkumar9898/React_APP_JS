import { useState } from "react";

import "./App.css";
import Hooks from "./Practice.jsx";
import Practice from "./Practice.jsx";
import Loader from "./Loader.jsx";


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <h1 className="heading">Counter App</h1>
        <div className="counter_div">

                <h1>{count}</h1>
                <div className="btn">
                    <button onClick={() => setCount(count + 1)}> add +</button>
                    <button onClick={() => setCount(0)}> Reset</button>
                    <button  onClick={() => setCount(count - 1)} disabled={count === 0}>Reduce - </button>
                </div>
            </div> */}
            
            <Practice />

        </>
    );
}

export default App;
