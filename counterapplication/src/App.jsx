import { useState } from "react";
import "./App.css";
import Navbar from "./navbar";
import RegistrationForm from "./pages/RegistrationForm";
import SignupCard from "./pages/RegistrationForm";

function App() {
    const [count, setCount] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const oncahnge = (e) => {
        setName(e.target.value);
    };
    const oncahnge1 = (e) => {
        setEmail(e.target.value);
    };

    const oncahnge2 = (e) => {
        setPassword(e.target.value);
    };

    const handlerest = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    const handleclick = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        handlerest();
    };

    return (
        <>
            {/* <div className=" w-96 text-center p-10 mt-20 mx-auto  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                <h1 className=" text-7xl">{count}</h1>

                <div className="mt-12 flex justify-around">
                    <button
                        className=" bg-green-900 text-white rounded font-bold py-1 px-5"
                        onClick={() => setCount(count + 1)}>
                        Add
                    </button>
                    <button
                        className="  bg-gray-900 text-white rounded font-bold py-1 px-5"
                        onClick={() => setCount(0)}>
                        Reset
                    </button>
                    <button
                        className="  bg-red-900 text-white rounded font-bold py-1 px-5"
                        onClick={() => setCount(count - 1)}>
                        Reduce
                    </button>
                </div>
            </div> */}

            <SignupCard />
        </>
    );
}

export default App;
