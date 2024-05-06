import { useState } from "react";
import "./App.css";
import { Data } from "./Utilities/Data";
console.log(Data);
import instaimg from "./assets/img/insgram.jpg";
import facebook from "./assets/img/facebook.png";
import twitter from "./assets/img/twitter.png";
import youtube from "./assets/img/youtube.png";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container">
                <div className="nav_container">
                    <div className="logo">
                        <div>
                            <img
                                className="logoimg"
                                src="https://images.vexels.com/media/users/3/156814/isolated/preview/3905419df3d4ee163e00f778b6110da6-lotus-symbol-icon.png"
                            />
                            <div>
                                <h1>LOGO</h1>
                            </div>
                        </div>
                    </div>
                    <div className="img_sec" id="img_sec"></div>
                </div>
            </div>
            <div className="Home_container">
                <div className="home_section">
                    <p>THE MOST</p>
                    <p>INSIGHTFUL</p>
                    <div className="marketing">
                        <p>MARKETING</p>
                        <p>CONFERENCE</p>
                        <p>IN EUROPE</p>
                    </div>
                    <p
                        id="lorem_text"
                        style={{
                            fontSize: "20px",
                            lineHeight: "18px",
                            padding: "10px 0px",
                        }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cum, aut! Lorem ipsum dolor sit amet.
                    </p>
                    <div className="btn">
                        <button>REGISTER NOW </button>
                        <button>LERN MORE</button>
                    </div>
                </div>
                <div className="home_img_section"></div>
            </div>

            <section id="main_section">
                <div className="main_icon">
                    <img
                        src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
                        alt=""
                    />
                    <img
                        src="https://www.logo.wine/a/logo/HubSpot/HubSpot-Logo.wine.svg"
                        alt=""
                    />
                    <img
                        src="https://images.livemint.com/img/2020/09/07/1600x900/Logo_Color_1599462534815_1599462543241.png"
                        alt=""
                    />
                    <img
                        src="https://1000logos.net/wp-content/uploads/2023/01/BuzzFeed-logo.png"
                        alt=""
                    />
                </div>
                <div className="photo_section">
                    <div className="p_text">
                        <p>16 SPEAKERS FROM 7 COUNTRIES AND CONTINENTS</p>
                        <h2>MEET OUR SPEEKERS</h2>
                    </div>
                    <div className="manager_pic">
                        {Data.map((item) => {
                            return (
                                <div>
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.lanstname}</p>
                                    <p>{item.brand}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="search">
                <div className="search">
                    <h2>LET'S STAY IN TOUCH</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, ex!
                    </p>
                    <div>
                        <input type="Enter Email" /> <button>SUBSCRIB</button>
                    </div>
                </div>
            </section>
            <section id="footer">
                <div className="footer">
                    <div className="footer_img">
                        <h1 className="etsy">Etsy</h1>
                        <button>Download the Etsy App</button>
                    </div>
                    <div className="footer_a">
                        <div>
                            <ul>
                                <li>Shop</li>
                                <li>Gift Cards</li>
                                <li>Etsy Registy</li>
                                <li>Sitemap</li>
                                <li>Etsy Blog</li>
                                <li>Etsy United Kingdom</li>
                                <li>Etsy Germany</li>
                                <li>Etsy Canada</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Sell</li>
                                <li>Sell on Etsy</li>
                                <li>Teams</li>
                                <li>Formus</li>
                                <li>Affiliates & Creators</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>About</li>
                                <li>Etsy Inc.</li>
                                <li>Policies</li>
                                <li>Investors</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Impact</li>
                                <li>Legal Imprint</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Help</li>
                                <li>Help Center</li>
                                <li>Privecy Setting</li>
                                <li className="social_icon">
                                    <div>
                                        <img src={instaimg} alt="" />
                                    </div>
                                    <div>
                                        <img src={facebook} alt="" />
                                    </div>
                                    <div>
                                        <img src={twitter} alt="" />
                                    </div>
                                    <div></div>
                                </li>
                                <li className="social_icon">
                                    <div>
                                        <img src={youtube} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer_line">
                <div className="footer_text">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                        alt=""
                    />
                    <p>India</p>
                    <p>English(IN)</p>
                    <p>RS(INR)</p>
                </div>
                <div>
                    <a href="">&#169; Etsy, Inc.</a>
                    <a href="">Terms Of Use</a>
                    <a href="">Privacy</a>
                    <a href="">interset based ads</a>
                    <a href="">Local shops </a>
                    <a href="">Regions</a>
                </div>
            </div>
        </>
    );
}

export default App;
