import React from 'react'
import  Card  from "antd";

const Card1 = ({ propdata }) => {
  const gridStyle = {
      width: "25%",
      textAlign: "center",
  };

  return (
      <div>
          <Card title="Card Title">
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                  Content
              </Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
          <h1>
              hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum, laborum!
          </h1>
          {propdata.map((ele) => {
              return (
                  <div>
                      <h1>
                          <h1>{ele.price}</h1>
                      </h1>
                  </div>
              );
          })}
      </div>
  );
}

export default Card1
