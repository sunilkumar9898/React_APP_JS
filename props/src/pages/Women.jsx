import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
const Women = () => {
    const [women, setWomen] = useState([]);

    const getWomenData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/men");

            setWomen(res.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWomenData();
    }, []);
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Welcome to men Products page </h1>
            <Card data={women} />
        </div>
    );
};

export default Women;
