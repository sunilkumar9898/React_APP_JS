import React from "react";
import { createContextApi } from "./Createcontext";
import { useContext } from "react";

const Counter = () => {
    const { addcount, reducecount, count } = useContext(createContextApi);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addcount}>Add</button>
            <button onClick={reducecount}>Reduce</button>
        </div>
    );
};

export default Counter;
