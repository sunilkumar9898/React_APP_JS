import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card';

const Girl = () => {
        const [girls, setgirls] = useState([]);

        const getmenData = async () => {
            try {
                let res = await axios.get("http://localhost:3000/girls");
                console.log(res.data);
                setgirls(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getmenData();
        }, []);
  return (
      <div>
          <h1 style={{ textAlign: "center" }}>Welcome to Girls Products page </h1>
          <Card data={girls} />
      </div>
  );
}

export default Girl
