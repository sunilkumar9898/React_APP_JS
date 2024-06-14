import React, { useState } from "react";

const Usecard = ({ propdata }) => {
    


    return (
        <>
            <div className="gird_div">
                {propdata.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <img src={ele.image} alt="" />
                            <p>{ele.name}</p>
                            <h4>Price : {ele.price}</h4>

                        </div>
                    );
                })}
            </div>

        </>
    );
};

export default Usecard;
