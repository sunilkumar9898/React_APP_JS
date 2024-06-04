import React, { useState } from "react";

let product = [
    { name: "Product A", rating: 4.5, price: 25.99 },
    { name: "Product B", rating: 3.8, price: 15.99 },
    { name: "Product C", rating: 4.9, price: 45.0 },
    { name: "Product D", rating: 5.2, price: 32.5 },
    { name: "Product E", rating: 4.7, price: 29.99 },
    { name: "Product F", rating: 7.5, price: 10.0 },
    { name: "Product G", rating: 4.0, price: 22.95 },
    { name: "Product H", rating: 8.8, price: 55.75 },
    { name: "Product I", rating: 3.9, price: 18.99 },
    { name: "Product J", rating: 4.6, price: 35.0 },
];

const ProductBased = () => {
    const [products, setProduct] = useState(product);

    // console.log(products, "123456");

    const filterData = () => {
        let newarr = products.filter((ele) => ele.rating > 4);
        setProduct(newarr)
    };




    return (
        <div>
            <h1>All product list</h1>
            <button onClick={filterData}>Top Products</button>
        
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                }}>
                {products.map((ele) => (
                    <div>
                        <h1>{ele.name}</h1> <h2>{ele.rating}</h2>
                        <h4>{ele.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductBased;
