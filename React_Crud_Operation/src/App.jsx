import { useState } from "react";

import "./App.css";
import Mainrouter from "./mainrouter/Mainrouter";
import Navbar from "./components/Navbar";
import ProductBased from "./pages/Filter";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            {/* <ProductBased /> */}
            <Mainrouter />
        </>
    );
}

export default App;
