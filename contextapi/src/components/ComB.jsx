import React, { useContext } from "react";
import { UserContext } from "./ComC";

const ComB = () => {
    const { count, handleReduce, handleAdd } = useContext(UserContext);

    return (
        <div>
            <h1>Count Value is {count}</h1>
            <div>
                <button
                    onClick={handleAdd}
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        margin: "10px",
                    }}>
                    Add Count
                </button>
                <button
                    onClick={handleReduce}
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        margin: "10px",
                    }}>
                    Reduce Count
                </button>
            </div>
        </div>
    );
};

export default ComB;
