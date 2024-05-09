import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("");

    let api = "https://fakestoreapi.com/products";

    const getProduct = async () => {
        try {
            let res = await axios.get(api);
            setData(res.data);
            setLoading(false);
        } catch (error) {
            console.log("error");
        }
    };

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        getProduct();
    }, []);

    // const filteredData = filter? data.filter((item) => item.category === filter): data;

    return (
        <div>
            <div>
                <select onChange={handleChange} value={filter}>
                    <option value="">Select</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            <hr />
            {filteredData.length >0&& (
                filteredData.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                    </div>
                ))
            )
        }
        </div>
    );
};

export default Product;
