import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-img" id="half">
        <img src="../../assets/bangle6.png" alt="" />
      </div>
      <div className="contact-form" id="half">
        <div id="contact-title">
          <h3>Leave us a Message</h3>
        </div>
        <div id="form">
          <form action="" id="contact-form">
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="text" name="phone" placeholder="Phone Number" />
            <textarea name="message" id="" placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
