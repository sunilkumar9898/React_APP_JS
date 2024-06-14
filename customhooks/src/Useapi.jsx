import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Useapi = (url) => {
    const [data, setData] = useState([])
    const getdata = async () => {
        let response = await axios.get(url)
        setData(response.data);
        console.log(data);
    }

    const delData = async(id) => {
        await axios.delete(`${url}/${id}`);
        alert("deleted")
 }

    useEffect(() => {
        getdata()
    }, [url])
    return { data, getdata, delData };
}

export default Useapi
