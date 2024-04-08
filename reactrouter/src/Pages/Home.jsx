import React from 'react';
import {Data} from '../Utilities/Data';
console.log(Data);

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 gap-10 '>
        {Data.map((item) => {
        return (
            <div key={item.id} className="shadow-2xl p-2 rounded-xl m-auto text-center font-bold group cursor-pointer">
                <img
                    className=" w-4/5 m-auto py-2 group-hover:scale-95 duration-1000"
                    src={item.image}
                    alt="logo"
                />
                <h1 className="group-hover:text-red-900 text-xl">
                    {item.name}
                </h1>
                <p className="text-xl group-hover:text-green-900">
                    {item.category}
                </p>
                <p>{item.brand}</p>
            </div>
        );
        })}
    </div>
    </div>
  )
}

export default Home
