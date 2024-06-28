import React from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";
export const createContextApi = createContext();
const Createcontextdata = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setcount] = useState(0);

    const addcount = () => {
        setcount(count + 1);
    };
    const reducecount = () => {
        setcount(count - 1);
    };
    const getData = async () => {
        try {
            let res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setData(res.data);
            console.log(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <createContextApi.Provider
                value={{ data, loading, count, reducecount, addcount }}>
                {children}
            </createContextApi.Provider>
        </>
    );
};

export default Createcontextdata;
