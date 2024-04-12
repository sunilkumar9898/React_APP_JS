import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  let arr = [];
  let cartValue = JSON.parse(localStorage.getItem("12/04/2024")) || [];

  const increasecartquantity = (item) => {
    item.quantity++;
  updatedcartvalue(cartValue)
  }

    const decreasevalue = (item) => {
      if (item.quantity > 1) {
          item.quantity--
        }
        updatedcartvalue(cartValue);
    };

  const updatedcartvalue = (ele) => {
    localStorage.setItem("12/04/2024", JSON.stringify(ele));
    window.location.reload();
  }

  const delcart = (data,index) => {
    data.splice(index,1)
    localStorage.setItem("12/04/2024", JSON.stringify(data));
        window.location.reload();
  }

    return (
        <div>
            <div className="mt-10 shadow-2xl p-20 container m-auto border border-gray-200 rounded-xl">
                {cartValue.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className="flex justify-between container m-auto px-20 border-b p-5">
                            <div className="flex  gap-5  justify-start">
                                <div className="  p-2 ">
                                    <img
                                        className="w-32 "
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <h1 className="text-sm ">id : {item.id}</h1>
                                    <h1 className=" font-bold">{item.name}</h1>
                                    <div className="flex gap-10">
                                        <h1>
                                            mrp : <del>$:{item.mrp}</del>
                                        </h1>
                                        <h1 className="font-bold">
                                            Discount :
                                            {(
                                                ((item.mrp - item.price) /
                                                    item.mrp) *
                                                100
                                            ).toFixed(0, 2)}
                                            %
                                        </h1>
                                    </div>
                                    <h1 className=" font-semibold text-lg">
                                        Price : $ {item.price}
                                    </h1>
                                    <h1>brand : {item.brand}</h1>
                                    <h1> Category : {item.category}</h1>
                                    <div className="flex justify-between pt-2">
                                        <a
                                            className="text-sm  font-semibold underline"
                                            href="#">
                                            Add to favourite
                                        </a>
                                        <a
                                            className="text-sm font-semibold underline text-red-600"
                                            href="#"
                                            onClick={() =>
                                                delcart(cartValue, index)
                                            }>
                                            Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className=" text-center flex h-10 ">
                                    <button
                                        className="bg-gray-400 p-3 py-0"
                                        onClick={() => decreasevalue(item)}>
                                        -
                                    </button>
                                    <button className="bg-gray-600 p-3 text-white">
                                        {item.quantity}
                                    </button>
                                    <button
                                        className="bg-gray-400 p-3"
                                        onClick={() =>
                                            increasecartquantity(item)
                                        }>
                                        +
                                    </button>
                                </div>
                                <div>
                                    <h1>Total: {item.price * item.quantity}</h1>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <Link to = {"/payment"}>
                    <button className="text-end float-end px-14 mt-5 pt-3 bg-violet-600 rounded font-semibold p-2 text-white">
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
