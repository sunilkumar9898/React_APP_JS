import React from 'react'

const Cart = () => {
    let cartData = JSON.parse(localStorage.getItem("ecommercedata")) || [];
    console.log(cartData);
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 mt-10 text-center cursor-pointer ">
          {cartData.map((ele) => {
              return (
                  <div className="shadow-2xl rounded-xl p-4 group ">
                      <img
                          className="group-hover:scale-95 duration-1000"
                          src={ele.image}
                          alt="photo"
                      />
                      <h1 className="font-bold p-2 group-hover:text-red-900 duration-1000">
                          {ele.name}
                      </h1>
                      <h2 className="font-bold text-xl text-green-800">
                          {" "}
                          $ :{ele.price}
                      </h2>
                  </div>
              );
          })}
      </div>
  );
}

export default Cart
