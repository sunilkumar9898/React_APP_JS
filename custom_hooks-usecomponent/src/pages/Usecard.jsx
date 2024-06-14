import React, { useState } from "react";
import { Button, Drawer } from "antd";

const intialvalue = {
    image: "",
    name: "",
    price: "",
};
const Usecard = ({ propdata, deldata ,postdata }) => {
    const [details, setDetails] = useState(intialvalue);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handlechange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = () => {
        postdata(details);
        setDetails(intialvalue)
          onClose();
        alert("success")
    console.log(details);
        }
    return (
        <>
            <div className="admin">
                <button type="primary" onClick={showDrawer}>
                    Add Cart
                </button>
            </div>

            <div className="gird_div">
                {propdata.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <img src={ele.image} alt="" />
                            <p>{ele.name}</p>
                            <h4>Price : {ele.price}</h4>
                            <button onClick={() => deldata(ele.id)}>
                                delete
                            </button>
                        </div>
                    );
                })}
            </div>

            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <input
                    type="text"
                    placeholder="Image"
                    name="image"
                    value={details.image}
                    onChange={handlechange}
                />
                <br /><br />
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={details.name}
                    onChange={handlechange}
                />
                <br /><br />
                <input
                    type="text"
                    placeholder="price"
                    name="price"
                    value={details.price}
                    onChange={handlechange}
                />
                <br /><br />

                <button onClick={handleSubmit}>submit</button>
            </Drawer>
        </>
    );
};

export default Usecard;
