import React, { useEffect, useState } from "react";
import axios from "axios";
import "./practice.css";
import Loader from "./Loader";
const Practice = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const api = "https://jsonplaceholder.typicode.com/posts";
    const getdata = async () => {
        try {
            let res = await axios.get(api);
            setData(res.data);
            setLoading(false);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getdata();
    }, []);
    // console.log(loading);
    return (
        <div className="container">
            {loading ? (
                <Loader />
                // <h1> Loading.........</h1>
            ) : (
                data.map((ele) => {
                    return (
                        <div>
                            <h1>{ele.title}</h1>
                            <h2>{ele.body}</h2>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Practice;
