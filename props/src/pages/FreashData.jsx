import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
const FreshData = () => {
    const [wo, setWo] = useState([]);

    const getWomenData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/women");

            setWo(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWomenData();
    }, []);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                Welcome to Women Products page{" "}
            </h1>
            <Card data={wo} />
        </div>
    );
};

export default FreshData;
