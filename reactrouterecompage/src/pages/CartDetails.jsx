import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";



const CartDetails = () => {

  let arr = [];
  let cartDetails = JSON.parse(localStorage.getItem("cardDetails")) || [];
  arr.push(cartDetails);

  return (
      <div>
          <div className="pt-5 px-20 flex gap-1 items-center font-bold underline text-blue-600 text-xl">
              <span>
                  <IoMdArrowRoundBack />
              </span>
              <Link to={"/"}>Back</Link>
          </div>
          <div className="mt-20 shadow-2xl  w-2/3 m-auto">
              {arr.map((item, index) => {
                  return (
                      <div
                          key={index}
                          className="flex  container gap-2 m-auto p-20">
                          <div className="w-1/2">
                              <img
                                  className="w-3/4 h-80 m-auto rounded"
                                  src={item.image}
                                  alt="photo"
                              />
                              <div className="flex justify-around pt-3">
                                  <Link to={"/"}>
                                      <button className="p-3 font-bold underline rounded text-blue-800 flex items-center gap-1">
                                          <IoMdArrowRoundBack /> Back to
                                          Shoppping Cart
                                      </button>
                                  </Link>
                                  <Link to={"/payment"}>
                                      <button className="p-3  font-bold underline text-blue-800 rounded flex items-center gap-2">
                                          Buy Now
                                          <FaArrowRight />
                                      </button>
                                  </Link>
                              </div>
                          </div>
                          <div>
                              <h1 className="text-xl font-medium">
                                  {item.name}
                              </h1>
                              <h1 className="text-2xl font-bold text-gray-400">
                                  {item.brand}
                              </h1>
                              <h1 className="font-bold text-2xl">
                                  {" "}
                                  <del className="px-1 text-gray-500">
                                      ₹ : {item.mrp}
                                  </del>{" "}
                                  {item.price}
                                  <span className=" font-medium text-green-700 px-2">
                                      {(
                                          ((item.mrp - item.price) / item.mrp) *
                                          100
                                      ).toFixed(0, 2)}
                                      % Off
                                  </span>{" "}
                              </h1>
                              <h1 className="font-medium text-xl pt-5">
                                  Available offers
                              </h1>
                              <div className="flex items-center gap-2">
                                  <img
                                      className="w-8  h-8"
                                      src=" https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                      alt=""
                                  />
                                  <p className=" space-x-2 py-2 ">
                                      <span className="text-black font-bold ">
                                          Bank Offer5%
                                      </span>
                                      <span className="text-gray-700 font-thin">
                                          Cashback on Flipkart Axis Bank Card
                                      </span>
                                      <a
                                          className="text-blue-800 font-bold"
                                          href="">
                                          T&C
                                      </a>
                                  </p>
                              </div>
                              <div className="flex items-center gap-2">
                                  <img
                                      className="w-8  h-8"
                                      src=" https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                      alt=""
                                  />
                                  <p className=" space-x-2 py-2 ">
                                      <span className="text-black font-bold ">
                                          Bank Offer5%
                                      </span>
                                      <span className="text-gray-700 font-thin">
                                          Flat ₹3,500 off on HDFC Bank Credit
                                          Card EMI Txns on 12 months tenure,
                                          Min. Txn Value: ₹50,000
                                      </span>
                                      <a
                                          className="text-blue-800 font-bold"
                                          href="">
                                          T&C
                                      </a>
                                  </p>
                              </div>

                              <div className="flex items-center gap-2">
                                  <img
                                      className="w-8  h-8"
                                      src=" https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                      alt=""
                                  />
                                  <p className=" space-x-2 py-2 ">
                                      <span className="text-black font-bold ">
                                          Bank Offer5%
                                      </span>
                                      <span className="text-gray-700 font-thin">
                                          Flat ₹3,500 off on HDFC Bank Credit
                                          Card EMI Txns on 12 months tenure,
                                          Min. Txn Value: ₹50,000
                                      </span>
                                      <a
                                          className="text-blue-800 font-bold"
                                          href="">
                                          T&C
                                      </a>
                                  </p>
                              </div>
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
  );
}

export default CartDetails
