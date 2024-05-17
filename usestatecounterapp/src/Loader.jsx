import React from "react";
import { Flex, Spin } from "antd";
import { Skeleton } from "antd";
const Loader = () => (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* <Spin size="large" /> */}
    
        <Skeleton />;
    </div>
);
export default  Loader
