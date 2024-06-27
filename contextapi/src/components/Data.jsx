import React, { useContext } from "react";
import { UserContext } from "./ComC";

const Data = () => {
    const { loading } = useContext(UserContext);
    console.log(loading);
    return <div>{loading}</div>;
};

export default Data;
