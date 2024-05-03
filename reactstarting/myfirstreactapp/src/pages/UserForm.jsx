import React, { useState } from "react";

const UserForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onchange = (e) => {
        setName(e.target.value);
        // console.log(name)
    };

    const onchange1 = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    };
    const handleReset = () => {
        setName("");
        setEmail("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
        handleReset()
    };

    return (
        <>
            <div className="main_container">
                <form action="" >
                    <h1>Registration Form</h1>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={onchange}
                        placeholder="Enter Your Name"
                    />
                    <br />
                    <br />
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={onchange1}
                        placeholder="Enter Your Email"
                    />
                    <br />
                    <br />
                    <div className="btn">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserForm;
