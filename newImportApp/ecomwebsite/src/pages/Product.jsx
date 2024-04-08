import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";
import { product } from "../utilites/data";
import Pagination from "./Pagination";
const Product = () => {





    return (
        <>
            <div className=" container m-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
                {product.map((ele) => {
                    return (
                        <div className="shadow-2xl rounded-xl p-5">
                            <img
                                className="w-11/12 m-auto"
                                src={ele.image}
                                alt="imag"
                            />
                            <h1 className="text-xl m-3 font-bold">
                                {ele.name}
                            </h1>
                            <h5 className="text-xl font-bold">
                                price$ {ele.price}
                            </h5>
                            <div className="flex justify-around mt-3">
                                <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-900 ">
                                    Cart
                                    <PiShoppingCartSimple />
                                </button>

                                <button className="bg-yellow-900 text-white px-5 py-2 rounded-xl hover:bg-green-900">
                                    Delete{" "}
                                    <MdDeleteForever
                                        style={{
                                            color: "red",
                                            fontSize: "20px",
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Pagination />
        </>
    );
};

export default Product;
