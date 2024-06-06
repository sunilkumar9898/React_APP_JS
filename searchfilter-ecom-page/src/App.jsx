import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Mainrouter from "./Mainrouter/Mainrouter";
import Footer from "./components/Footer";

let colors = ["red", "green", "blue", "yellow", "orange"];
function App() {
    const [count, setCount] = useState(0);
    const [background, setBackground] = useState("");
    const [theme, setTheme] = useState("state");

    const toggleTheme = () => {
        setTheme((prev) => (prev == "state" ? "changeState" : "state"));
    };
    console.log(theme);

    // const handleColor = () => {
    //     let rendom = Math.floor(Math.random() * colors.length);
    //     console.log(rendom);
    //     setBackground(colors[rendom]);
    // };

    return (
        <>
            <Navbar />
      <Mainrouter />
      <Footer/>

            {/* <div style={{ width: "50%", backgroundColor: background,height:"400px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quia expedita illo porro doloremque non voluptatibus
                illum. Laudantium, amet! Ullam, sequi a natus saepe id quia
          velit maiores neque molestias?
          <h1>{background}</h1>
            </div> */}
            <div className={`${theme == "state" ? "light" : "dark"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, ea.
                <h1>{theme}</h1>
            </div>
            <button onClick={toggleTheme}>Click for BackGround</button>
        </>
    );
}

export default App;
