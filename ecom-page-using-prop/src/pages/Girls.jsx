import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';


const Girls = () => {
    const [girl, setGirl] = useState([]);
    const[loading, setLoading] = useState(true)

        const getmenData = async () => {
            try {
                let res = await axios.get(
                    "https://renderjsondata.onrender.com/girls"
                );
                console.log(res.data);
                setGirl(res.data);
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getmenData();
        }, []);
  return <div style={{marginTop:"100px",textAlign:"center"}}>{loading ? (<h1>loading .... </h1>) : (<Card data={girl} />)}</div>;
}

export default Girls
