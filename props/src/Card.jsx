import React from "react";
import "./cart.css"
const Card = ({ data }) => {
    return (
        <div className="cart">
            {data.map((ele) => {
                return (
                    <div>
                        <img src={ele.image} alt="product" />
                        <h1>{ele.name}</h1>
                        <h3>{ele.price}</h3>
                        <h4>{ele.rating}</h4>
                        <div
                            style={{
                                width: "90%",
                                margin: "auto",
                                display: "flex",
                                justifyContent: "space-around",
                            }}>
                            <button>Add To cart🛒</button>
                            <button>Add To Fav❤️</button>
                            {/* <button>Buy Now💵</button> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
