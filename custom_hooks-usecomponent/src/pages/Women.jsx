import React from 'react'
import Useapi from './Useapi'
import Usecard from './Usecard';

const Women = () => {
  const { loading,data, getdata ,deldata,postData } = Useapi("https://renderjsondata.onrender.com/women");
  return (
      <div>
          {loading ? (
              <h1
                  style={{
                      textAlign: "center",
                      marginTop: "200px",
                      color: "#005AFF",
                  }}>
                  Loading..........
              </h1>
          ) : (
              <Usecard propdata={data} deldata={deldata} postdata={postData} />
          )}
      </div>
  );
}

export default Women
