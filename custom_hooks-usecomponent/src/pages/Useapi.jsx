import React, { useEffect, useState } from "react";
import axios from "axios";

const Useapi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getdata = async () => {
        try {
            let res = await axios.get(url);
            setData(res.data);
            setLoading(false)
            console.log(res.data,"123654");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getdata();
    }, [url]);

    return {loading, data, getdata };
};

export default Useapi;
