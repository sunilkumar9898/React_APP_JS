import React, { useEffect, useState } from "react";
import axios from "axios";

const Useapi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const getdata = async () => {
        try {
            let res = await axios.get(url);
            setData(res.data);
            setLoading(false);
            console.log(res.data, "123654");
        } catch (error) {
            console.log(error);
        }
    };

    // <----------------DELETE DATA --------------------?

    const deldata = async (id) => {
        try {
            let res = axios.delete(`${url}/${id}`);
            alert("deleted successfully");
            getdata()
        } catch (error) {
            console.log(error);
        }
    };

    // <------------------------Post Data --------------->

    const postData = async (newData) => {
        try {
            await axios.post(url,newData);
                getdata();
        } catch (error) {
            console.log(error);
        }
    };


    // < -------------------- UpDATED DATA ---------------->

    const updateddata = (id) => {
        let selectItem = data.find((ele) => ele.id === id)
        console.log(selectItem);
    }

    useEffect(() => {
        getdata();
    }, [url]);

    return { loading, data, getdata, deldata, postData, updateddata };
};

export default Useapi;
