import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = () => {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    let api = "https://fakestoreapi.com/products";

    const getData = async () => {
        try {
            let res = await axios.get(api);
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.log("error");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;



    return (
        <div>
            <div>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}>
                    <option value="">Select</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>

            {filteredData.map((ele) => {
                return <h1>{ele.category}</h1>;
            })}
        </div>
    );
};

export default Item;
