import { Route, Routes } from "react-router-dom";

import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Service from "../Pages/Service";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";

function App() {
    return (

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

    );
}

export default App;
