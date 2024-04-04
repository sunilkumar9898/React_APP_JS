import React, { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
    const [value, setValue] = useState([]);
    const getData = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products");

            setValue(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    console.log(value);
    return (

        <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-10 p-10 shadow-2xl">
            {value.map((ele) => {
                return (
                    <div className="rounded-2xl p-10  mx-auto  shadow-xl">
                        <img
                            className="mx-auto w-20 pb-10 "
                            src={ele.image}
                            alt=""
                        />
                        <h1>{ele.title}</h1>
                        <p>{ele.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Product;
