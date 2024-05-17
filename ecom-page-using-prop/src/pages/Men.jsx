import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const Men = () => {
    const [men, setMen] = useState([]);
    const getmenData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/men");
            console.log(res.data);
            setMen(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getmenData();
    }, []);

    return (
        <div >
            <Card data={men}/>
        </div>
    );
};

export default Men;
