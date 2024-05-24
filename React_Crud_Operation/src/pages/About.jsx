import React, { useState } from 'react'

let form_value = {
  name: "",
  email:""
}

const About = () => {
  const [details, setDetails] =useState (form_value)

  const handlechangevalue = (e) => {
    const { name, value } = e.target
    setDetails((prev) => ({
      ...prev, [name]: value,
    }));

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setDetails(form_value)
    console.log(details);
  }


  return (
      <div>
          <div className="form">
              <form action="">
                  <h1>Login</h1>
                  <label htmlFor="name">name</label>
                  <input
                      name="name"
                      value={details.name}
                      onChange={handlechangevalue}
                      type="text"
                      placeholder=" enter name"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                      name="email"
                      value={details.email}
                      onChange={handlechangevalue}
                      type="email"
                      placeholder="Enter email"
                  />
                  <button className="btn" onClick={handleSubmit} type="submit">
                      submit
                  </button>
              </form>
          </div>
      </div>
  );
}

export default About
