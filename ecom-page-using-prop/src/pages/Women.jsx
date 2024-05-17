import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Women = () => {
        const [women, setWomen] = useState([]);
        const getmenData = async () => {
            try {
                let res = await axios.get("http://localhost:8000/women");
                console.log(res.data);
                setWomen(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getmenData();
        }, []);
  return (
    <div>
<Card data={women}/>
    </div>
  )
}

export default Women
