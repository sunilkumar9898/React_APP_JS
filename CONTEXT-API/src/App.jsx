import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import User from "./Pages/User";
import Createcontextdata from "./Pages/Createcontext";
import Counter from "./Pages/Counter";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <Createcontextdata>
          <Counter/>
                <User />
            </Createcontextdata>
        </>
    );
}

export default App;
