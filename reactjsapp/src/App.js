import AOS from "aos";
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import './App.css';
import { data } from "./utilities/data";
console.log(data);

function App () {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <nav className='flex justify-around  shadow-2xl p-1 sticky top-0 bg-white z-10'>
        <div className="logo ">
          <img className='w-16 shadow-2xl' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1712102400&semt=sph" alt="" />
        </div>
        <div className='w-1/2 my-auto font-bold  navbar'>
          <ul className='flex justify-between'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
          </ul>
        </div>
        <div className="my-auto font-bold">
          <span>&#9776;</span>
        </div>
      </nav>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-10 gap-10  main_div '>
        {data.map((ele) => {
          return (
            <div className='shadow-2xl p-5 rounded-2xl cursor-pointer' data-aos="zoom-in">
              <img src={ele.image} alt="" />
              <h2 className='pt-3 font-bold  text-xl text-blue-700'>{ele.name}</h2>
              <h3 className='pt-2 font-bold text-green-700 text-xl'>$ : {ele.price}</h3>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
