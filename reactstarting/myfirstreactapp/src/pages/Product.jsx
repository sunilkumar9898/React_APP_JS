import React from "react";
import userData from "../utilitis/data";
import "./product.css";
const Product = () => {
    console.log(userData);
    return (
        <>
            <table border={"1px"}>
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                        </tr>;
                    })}
                </tbody>
            </table>
            <div className="container">
                {userData.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <p>{item.id}</p>
                            <h1>{item.name}</h1>
                            <h3>{item.email}</h3>
                            <p>{item.username}</p>
                            <h3>{item.password}</h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Product;
