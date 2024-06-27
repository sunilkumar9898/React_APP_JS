import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState("suhail khan");
    console.log(loading, "11");

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleReduce = () => {
        setCount(count - 1);
    };

    return (
        <UserContext.Provider value={{ loading, count, handleAdd, handleReduce }}>
            {children}
        </UserContext.Provider>
    );
};
