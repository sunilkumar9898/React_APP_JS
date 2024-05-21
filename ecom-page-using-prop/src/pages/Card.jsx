import React from 'react'
import "../css/Men.css";

const Card = ({ data }) => {

  return (
      <div className='container'>
          {data.map((ele) => {
              return (
                  <div className="card_div" key={ele.id}>
                      <div className='img_sec'>
                          <img src={ele.image} alt="" />
                      </div>
                      <p>Product : {ele.name + "...."}</p>
                      <p> $ : {ele.price}</p>
                      <p> Rating : {ele.rating}</p>
                      <div className="btn">
                          <button>Buy Now</button>
                          <button>Add to cart</button>
                      </div>
                  </div>
              );
          })}
    </div>
  )
}

export default Card
