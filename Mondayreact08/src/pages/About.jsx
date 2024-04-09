import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const About = () => {
    let cartValue = JSON.parse(localStorage.getItem("ecomData"));

    const cartDetail = (item) => {
        localStorage.setItem("cartdetails", JSON.stringify(item));
        window.location.href = "./contact";
    };

      const delcart = (index) => {
          cartValue.splice(index, 1);
          localStorage.setItem("ecomData", JSON.stringify(cartValue));
          alert("Item removed from cart successfully");
            window.location.reload();

      };


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-10 px-10">
            {cartValue.map((item, index) => {
                return (
                    <div key={index} className="shadow-2xl rounded-xl">
                        <img className="w-2/3 m-auto" src={item.image} alt="" />
                        <div className="font-medium text-xl flex justify-between px-10 py-2">
                            <h1>{item.brand}</h1>
                            <h1> Price $:{item.price}</h1>
                        </div>
                        <p className="px-10 pb-2 font-medium text-xl">
                            {item.name}
                        </p>
                        <div className="flex px-10 justify-between pb-5">
                            <button
                                onClick={() => cartDetail(item)}
                                className="flex  items-center gap-2  bg-yellow-600 rounded p-2 text-white">
                                Cart Details
                            </button>
                            <button
                                className="flex  items-center gap-2  bg-red-600 rounded p-2 text-white"
                                onClick={() => delcart(cartValue, index)}>
                                Delete
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default About;
