import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';


const Girls = () => {
        const [girl, setGirl] = useState([]);
        const getmenData = async () => {
            try {
                let res = await axios.get("http://localhost:8000/girls");
                console.log(res.data);
                setGirl(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getmenData();
        }, []);
  return (
    <div>
<Card data={girl}/>
    </div>
  )
}

export default Girls
