import React from 'react'
import Useapi from './Useapi'
import Usecard from './Usecard';


const Home = () => {
    const { loading, data, getdata } = Useapi(
        "https://renderjsondata.onrender.com/men"
    );
    console.log(data,"123456");
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
              <Usecard propdata={data} />
          )}
      </div>
  );
}

export default Home
