import React from "react";
import Useapi from "./Useapi";

const Men = () => {
    const { data, delData } = Useapi(
        "https://renderjsondata.onrender.com/men"
    );

    console.log(data);
    return (
        <div>
            {data.map((e) => {
                return (
                    <div>
                        <img src={e.image} alt="" />
                        <button onClick={() => delData(e.id)}>delte</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Men;
