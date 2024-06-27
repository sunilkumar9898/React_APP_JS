import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ComB from "./components/ComB";
import Data from "./components/Data";
import { UserProvider } from "./components/ComC";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <UserProvider>
                <ComB />
                <Data />
            </UserProvider>
        </>
    );
}

export default App;
