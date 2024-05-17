import React, { useEffect, useState } from 'react';
import axios from 'axios'



const Home = () => {

    const [response, setResponse] = useState([]);
    const[loading,setLoading]=useState(true)


    let url = "https://fakestoreapi.com/products";


    const getData = async() => {
        try {
            let res = await axios.get(url)
            setResponse(res.data)
            setLoading(false)
            console.log(res.data);
        } catch (error) {
console.log(error);
        }
    }
    useEffect(() => {
        getData();
    },[])
  return (
      <div>
          {/*  navbar  */}
          <div className="navbar">
              <div className="s_name">
                  <span>S</span>
                  <span>k</span>
              </div>
              <div className='search'><input type="search" placeholder='search' /></div>
              <div className="nav_link">
                  <a href="">HOME</a>
                  <a href="">ABOUT</a>
                  <a href="">CONTACT</a>
                  <a href="">SERVICE</a>
              </div>
              <div className="hemburger">
                  <span >
                      &#9776;
                  </span>
              </div>
          </div>

          {/* main section of cartr  */}

          <div className="main_section">
              {loading ? (<h1>Loading....</h1>) : (
                        response.map((ele, index) => {
                  return (
                      <div key={index}>
                          <img src={ele.image} alt="" />

                          <p>Brand : {ele.description.slice(0, 20) + "..."}</p>

                          <p>
                              Product Name :{" "}
                              {ele.category.slice(0, 10) + "......."}
                          </p>

                          <span
                              style={{
                                  display: "flex ",
                                  justifyContent: "space-between",
                              }}>
                              <p>
                                  <strike>{ele.strikedOffPrice}</strike>
                              </p>
                              <p>Price : {ele.price}</p>
                          </span>
                          <button>Buy Now</button>
                      </div>
                  );
              })
              )
              }
          </div>

          {/* footer--------- */}

          <div className="footer">
              <div className="footerlink">
                  <div>
                      <a href="">Product</a>
                      <a href="">Page</a>
                      <a href="">Builder</a>
                      <a href="">Restrictions</a>
                  </div>
                  <div>
                      <a href="">Use Cases</a>
                      <a href="">Web - Designers</a>
                      <a href="">Marketers</a>
                      <a href="">Small Business</a>
                      <a href="">Website Builder</a>
                  </div>
                  <div>
                      <a href="">Resources</a>
                      <a href="">Academy</a>
                      <a href="">Blog</a>
                      <a href="">Themes</a>
                      <a href="">Hosting</a>
                      <a href="">Developers</a>
                      <a href="">Support</a>
                  </div>
                  <div>
                      <a href="">Company</a>
                      <a href="">About Us</a>
                      <a href="">Carrers</a>
                      <a href="">FAQ's</a>
                      <a href="">Teams</a>
                      <a href="">Contact Us</a>
                  </div>
                  <div>
                      <a href="">Contact US</a>
                      <a href="">location</a>
                      <a href="">Message</a>
                  </div>
              </div>
              <div className="icons">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-youtube"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-google"></i>
              </div>
              <div className="email">
                  <a href="#">www.sunilkumar@gmail.com</a>
              </div>
          </div>
      </div>
  );
}

export default Home
