import React, { useEffect, useState } from "react";
import axios from "axios";

let form_value = {
    name: "",
    email: "",
};

const About = () => {
    const [details, setDetails] = useState(form_value);
    const [value, setvalue] = useState([]);
    const [updatedId, setupdatedId] = useState(null);

    const handlechangevalue = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (updatedId) {
            patchData(updatedId);
            alert("details updated");
        } else {
            postData();
            alert("details added");
        }
    };

    const postData = async () => {
        try {
            let res = await axios.post(
                "http://localhost:8080/studentData",
                details
            );
            setDetails(res.data);
            getData();
        } catch (error) {
            console.log(error);
        }
        setDetails(form_value);
    };

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/studentData");
            setvalue(res.data);
        } catch (error) {
            error;
        }
    };

    const delData = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/studentData/${id}`);
            alert("deleted");
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    // <--------------for edit----------->
    const handleUpdate = (id) => {
        let selectedItem = value.find((ele) => ele.id === id);

        if (selectedItem) {
            setDetails(selectedItem);
            setupdatedId(id);
        }
    };

    // <-----------For patch details-------->

    const patchData = async (id) => {
        try {
            let res = await axios.patch(
                `http://localhost:8080/studentData/${id}`,
                details
            );

            getData();
        } catch (error) {
            console.log(error);
        }
        setDetails(form_value); // Reset the form values after updating
        setupdatedId(null); // Reset updatedId after updating
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div>
                <div className="form">
                    <form action="">
                        <h1>Login</h1>
                        <label htmlFor="name">name</label>
                        <input
                            name="name"
                            value={details.name}
                            onChange={handlechangevalue}
                            type="text"
                            placeholder=" enter name"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            value={details.email}
                            onChange={handlechangevalue}
                            type="email"
                            placeholder="Enter email"
                        />
                        <button
                            className="btn"
                            onClick={handleSubmit}
                            type="submit">
                            {updatedId ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="FormData">
                <table
                    border={1}
                    style={{
                        width: "50%",
                        margin: "auto",
                        borderCollapse: "collapse",
                        textAlign: "center",
                    }}>
                    <thead style={{ padding: "20px" }}>
                        <tr>
                            <th>Srno</th>
                            <th>Username</th>
                            <th>Useremail</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {value.map((ele) => {
                            return (
                                <tr key={ele.id}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                delData(ele.id);
                                            }}>
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleUpdate(ele.id);
                                            }}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default About;
