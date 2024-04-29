import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {


    let cartpay = JSON.parse(localStorage.getItem("12/04/2024"));
    let sum = 0;
    for (let i = 0; i < cartpay.length; i++){
        sum = sum + cartpay[i].quantity * cartpay[i].price;
    }

    const payment = () => {
        alert("Congratulations For Shopping 🎉🎉🎉🎊🎊✌️✌️👍👍")
        localStorage.clear();
        window.location.href ='/'
  }
  return (
      <div className="   bg-gray-400 p-5 ">
          <div className=" px-44 font-medium  text-xl underline text-blue-600 pt-10">
              <Link to={"/about"}>Edit cart</Link>
          </div>
          <div className="container m-auto flex justify-between flex-wrap mt-20 mb-28">
              <div className="w-3/5 bg-gray-200 p-5 rounded">
                  <div className="flex justify-between items-center bg-gray-100 shadow-xl p-8">
                      <div>
                          <h1>LOGIN </h1>
                          <h1>8209277800</h1>
                      </div>
                      <div className=" border border-gray-300 p-2">
                          <button className="text-blue-600 font-bold">
                              CHANGE
                          </button>
                      </div>
                  </div>
                  <div className="pt-2">
                      <label
                          htmlFor="price"
                          className="block text-sm font-semibold leading-6 text-gray-900">
                          Email Address
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-500 sm:text-sm"></span>
                          </div>
                          <input
                              type="text"
                              name="price"
                              id="price"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Email Address"
                          />
                      </div>
                  </div>

                  <div className="pt-5">
                      <h1 className="font-medium pt-2 pb-2">Payment Details</h1>
                      <label
                          htmlFor="price"
                          className="block text-sm font-semibold leading-6 text-gray-900">
                          Name on card
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-500 sm:text-sm"></span>
                          </div>
                          <input
                              type="text"
                              name="price"
                              id="price"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Name"
                          />
                      </div>
                      <label
                          htmlFor="price"
                          className="block text-sm font-semibold leading-6 text-gray-900">
                          Card number
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-500 sm:text-sm"></span>
                          </div>
                          <input
                              type="text"
                              name="price"
                              id="price"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Card Number"
                          />
                      </div>

                      <div className="flex gap-5 pt-5">
                          <div>
                              <label
                                  htmlFor="price"
                                  className="block text-sm font-semibold leading-6 text-gray-900">
                                  Expiration date (MM/YY)
                              </label>
                              <div className="relative mt-2 rounded-md shadow-sm">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                      <span className="text-gray-500 sm:text-sm"></span>
                                  </div>
                                  <input
                                      type="text"
                                      name="price"
                                      id="price"
                                      className="block w-96 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      placeholder="Expiration date (MM/YY)"
                                  />
                              </div>
                          </div>
                          <div>
                              <label
                                  htmlFor="price"
                                  className="block text-sm font-semibold leading-6 text-gray-900">
                                  CVC
                              </label>
                              <div className="relative mt-2 rounded-md shadow-sm">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                      <span className="text-gray-500 sm:text-sm"></span>
                                  </div>
                                  <input
                                      type="text"
                                      name="price"
                                      id="price"
                                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      placeholder="CVC Number"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="bg-gray-200 shadow-xl items-start p-5 rounded w-96">
                  <div className=" flex justify-between border-b-2 border-gray-800 pb-7">
                      <div className="flex flex-col gap-3 font-bold text-xl text-gray-500 ">
                          <h1>Subtotal</h1>
                          <h1>Shipping Charge</h1>
                          <h1>Taxes</h1>
                      </div>
                      <div className="flex flex-col gap-3 font-bold text-xl text-black ">
                          <h1>₹ {sum}</h1>
                          <h1>
                              ₹ <del>40</del> <span>Free</span>
                          </h1>
                          <h1>₹ 50</h1>
                      </div>
                  </div>
                  <div className="flex font-bold justify-between pt-10 text-xl text-gray-800">
                      <p>Total Payment</p>
                      <p> ₹ {sum + 50}</p>
                  </div>

                  <div>
                      <img
                          className="pt-10"
                          src="https://wpthemesgrid.com/themes/free/eshop/images/payment-method.png"
                          alt=""
                      />
                  </div>
                  <div className="flex gap-5 items-center pt-5">
                      <img
                          className="w-10"
                          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png"
                          alt=""
                      />
                      <h1 className="font-bold text-sm text-gray-500">
                          Safe and Secure Payments. Easy returns. 100% Authentic
                          products.
                      </h1>
                  </div>
                  <div className="mt-10 bg-green-700 p-3 text-center text-white font-normal ">
                      <button className="uppercase" onClick={payment}>
                          Payment
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Payment
