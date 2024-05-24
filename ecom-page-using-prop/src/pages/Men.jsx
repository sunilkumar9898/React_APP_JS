import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const Men = () => {
    const [men, setMen] = useState([]);
    const [loading,setLoading] = useState(true)
    const getmenData = async () => {
        try {
            let res = await axios.get(
                "https://renderjsondata.onrender.com/men"
            );
            console.log(res.data);
            setMen(res.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getmenData();
    }, []);

    return (
        <div>
            <div style={{ marginTop: "100px", textAlign: "center" }}>
                {loading ? <h1>loading .... </h1> : <Card data={men} />}
            </div>
            ;
        </div>
    );
};

export default Men;
