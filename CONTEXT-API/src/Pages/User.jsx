import React from "react";
import { useContext } from "react";
import  {createContextApi}  from "./Createcontext";
const User = () => {
    const { data, loading } = useContext(createContextApi);
    console.log(loading)
    return (
        <div>
            <h1>Welcome to user page</h1>

            {loading ? (
                <h1>Loading........</h1>
            ) : (
                data.map((ele) => {
                    return (
                        <div>
                            <h1>{ele.id}</h1>
                            <h2>{ele.title}</h2>
                            <h3>{ele.body}</h3>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default User;
