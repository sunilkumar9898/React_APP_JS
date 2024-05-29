import React from 'react'
import { Spin } from "antd";
import "../style/loader.css"
const Loader = () => {
    return (
      <>
      <div className='loader'>
          <Spin className='spin' size="large" />;<br />
          <h1 >Please wait.......</h1>
            </div>
               </>
  );
}

export default Loader
