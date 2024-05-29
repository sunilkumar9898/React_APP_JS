import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../component/Loader";
import "../style/product.css";
import { Button, Drawer } from "antd";

let initial = {
    image: "",
    name: "",
    price: "",
};

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(initial);
    const [updateid, setUpdateid] = useState(null);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setDetails((e) => ({
            ...e,
            [name]: value,
        }));
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const getData = async () => {
        try {
            let res = await axios.get(
                "https://renderserver-z3g5.onrender.com/men"
            );

            setData(res.data);
            setloading(false);
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    };
    // <---------------------Update Data ----------------->
    const upateData = (id) => {
        let selectItem = data.find((ele) => ele.id === id);
        showDrawer();
        if (selectItem) {
            setDetails(selectItem);
            setUpdateid(id);
        }
    };
    //  ---------------------------Patch Data ---------------
    const patchData = async (id) => {
        try {
            let res = await axios.patch(
                `https://renderserver-z3g5.onrender.com/men/${id}`,
                details
            );
            getData();
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    //  <----------------------Delete Data--------------->
    const delData = async (id) => {
        try {
            let res = await axios.delete(
                `https://renderserver-z3g5.onrender.com/men/${id}`
            );
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    // <--------------------Handle SUbmit ---------->
    const handleSubmit = () => {
        if (updateid) {
            patchData(updateid);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {/* <button onClick={handlForm}>data dekha do</button> */}
            {loading ? (
                <Loader />
            ) : (
                <div className="container">
                    {data.map((ele, index) => (
                        <div key={index}>
                            <img src={ele.image} alt="image" />
                            <p>{ele.name}</p>
                            <p>{ele.price}</p>
                            <div className="btnn">
                                <button onClick={() => upateData(ele.id)}>
                                    Edit
                                </button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* <----------Drawer-------> */}
            <Drawer
                title="Basic Drawer"
                onClose={onClose}
                open={open}
                className="draw_box">
                <div className="drawer">
                    <label htmlFor="url">URL</label>
                    <input
                        type="text"
                        placeholder="img URL"
                        onChange={handlechange}
                        value={details.image}
                        name="image"
                    />
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={handlechange}
                        value={details.name}
                        name="name"
                    />
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        placeholder="Price"
                        onChange={handlechange}
                        value={details.price}
                        name="price"
                    />
                    <div className="btn">
                        <button onClick={handleSubmit}>SUBMIT</button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Product;
