import React from "react";
import "../PagesCss/Contact.css";

const Contact = () => {
    const formImage = {
        image: "https://plus.unsplash.com/premium_photo-1663089667998-77622508cd27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
    return (
        <div>
            <div className="contact_form">
                <div className="form_img">
                    <img src={formImage.image} alt="" />
                </div>
                <div className="form">
            <h1>contact</h1>
      
                </div>
            </div>
        </div>
    );
};

export default Contact;
