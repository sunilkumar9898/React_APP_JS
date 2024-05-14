import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="counter_div">
                <h1>{count}</h1>
                <div className="btn">
                    <button onClick={() => setCount(count + 1)}> add +</button>
                    <button onClick={() => setCount(0)}> Reset</button>
                    <button  onClick={() => setCount(count - 1)} disabled={count === 0}>Reduce - </button>
                </div>
            </div>
        </>
    );
}

export default App;
