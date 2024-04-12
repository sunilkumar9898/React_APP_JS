import React from "react";
import { Product } from "../Utilities/Product";
import { FaShoppingCart } from "react-icons/fa";
import CartDetails from "./CartDetails";
import { Link } from "react-router-dom";

console.log(Product);

const Home = () => {
    const addTocart = (item) => {
        let arr = JSON.parse(localStorage.getItem("12/04/2024")) || [];
        let found = arr.some((ele) => ele.id === item.id);
        if (found) {
            alert("already added in cart");
        } else {
            arr.push(item);
            localStorage.setItem("12/04/2024", JSON.stringify(arr));
            alert("success");
        }
    };


    const cardDetails = (ele) => {
        localStorage.setItem("cardDetails", JSON.stringify(ele));


    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-10 mt-16 gap-10 gap-y-20">
                {Product.map((ele) => {
                    return (
                        <div key={ele.id} className="shadow-xl p-5 group">
                            <Link to={"/carddetails"}>
                                {" "}
                                <img
                                    onClick={() => cardDetails(ele)}
                                    className="group-hover:scale-95 duration-1000 cursor-pointer"
                                    src={ele.image}
                                    alt="photos"
                                />
                            </Link>
                            <div className="flex justify-between pt-2 font-medium">
                                <h1>{ele.brand}</h1>
                                <p>{ele.category}</p>
                            </div>
                            <h1 className="font-bold text-xl group-hover:text-red-950">
                                {ele.name}
                            </h1>
                            <div className="flex justify-between pt-5 font-medium">
                                <h1 className="font-medium text-xl text-indigo-900">
                                    Price : ${ele.price}
                                </h1>

                                <span
                                    className="font-bold text-2xl cursor-pointer "
                                    onClick={() => addTocart(ele)}>
                                    <FaShoppingCart />
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
