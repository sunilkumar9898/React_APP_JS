import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const initinal = {
    name: "",
    email: "",
};

const Home = () => {
    const [details, setDetails] = useState(initinal);
    const [value, setvalue] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((e) => ({
            ...e,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("http://localhost:8080/data", details);
        
            setDetails(res.data);
            alert("submitted");
            getData();
        } catch (error) {
            console.log(error);
        }
        setDetails(initinal);
    };

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/data");
            // console.log(res);
            setvalue(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getdelData = async (id) => {
        try {
            let res = await axios.delete(`http://localhost:8080/data/${id}`);
            console.log(res);
          alert("deleted");
          getData()
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="form">
                <form action="">
                    <label htmlFor="name">name</label>
                    <input
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                        type="text"
                        placeholder=" enter name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={details.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                    <button onClick={handleSubmit} type="submit">
                        submit
                    </button>
                </form>
            </div>
            <hr />
            <hr />
            {value.map((ele) => {
                return (
                    <div>
                        <h1>{ele.name}</h1>
                        <h3>{ele.email}</h3>
                        <button onClick={() => getdelData(ele.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default Home;
