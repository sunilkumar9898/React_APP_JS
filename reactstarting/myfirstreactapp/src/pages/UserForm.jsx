import React from 'react'

const UserForm = () => {



  return (
      <>
          <div className="main_container">
              <form action="">
                  <h1>Registration Form</h1>
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                  <br />
                  <br />
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Enter Your Email" />
                  <br />
                  <br />
                  <div className="btn">
                      <button>Submit</button>
                  </div>
              </form>
          </div>
      </>
  );
}

export default UserForm
