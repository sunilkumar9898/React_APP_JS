import React from "react";
import { product } from "../utilities/data";
import { BsCartPlus } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
console.log(product);
const Product = () => {
    const notify = () =>
        toast.success("Successfully Added In cart", {
            autoClose: 2000,
            position: "top-center",
        });
    const notifyerror = () => toast.error("Already Added In cart", { autoClose: 2000, });


    const addtocart = (item) => {
        let arr = JSON.parse(localStorage.getItem("ecommercedata")) || [];
        let found = arr.some((ele) => ele.id === item.id);
        if (found) {
            notifyerror()
        } else {
            arr.push(item);
            localStorage.setItem("ecommercedata", JSON.stringify(arr));
            notify();
        }
    };

    return (
        <>
            {" "}
            <ToastContainer />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 mt-10 text-center cursor-pointer ">
                {product.map((ele) => {
                    return (
                        <div className="shadow-2xl rounded-xl p-4 group ">
                            <img
                                className="group-hover:scale-95 duration-1000"
                                src={ele.image}
                                alt="photo"
                            />
                            <h1 className="font-bold p-2 group-hover:text-red-900 duration-1000">
                                {ele.name.slice(0,20)}
                            </h1>
                            <h2 className="font-bold text-xl text-green-800">
                                {" "}
                                $ :{ele.price}
                            </h2>
                            <div className="flex justify-between mt-2 px-5">
                                <div
                                    className="flex p-2 bg-black text-white rounded"
                                    onClick={() => addtocart(ele)}>
                                    <p>Cart</p>
                                    <p className="p-1 font-bold text-white">
                                        <BsCartPlus />
                                    </p>
                                </div>
                                <div className="flex p-2 bg-red-600 rounded">
                                    <p className="p-1 font-bold text-white">
                                        <RiDeleteBin6Line />
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Product;
