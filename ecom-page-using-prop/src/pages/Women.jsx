import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Women = () => {
    const [women, setWomen] = useState([]);
    const[loading,setLoading] = useState(true)
        const getmenData = async () => {
            try {
                let res = await axios.get(
                    "https://renderjsondata.onrender.com/women"
                );
                console.log(res.data);
                setWomen(res.data);
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
              {loading ? <h1>loading .... </h1> : <Card data={women} />}
          </div>
          ;
      </div>
  );
}

export default Women
