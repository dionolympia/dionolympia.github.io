import React, { Component } from "react";
class ContactMe extends Component {
  state = {};
  render() {
    return (
      <div className="Contact-me-container">
        <h1 style={{ fontFamily: "'Poppins' ,sans-serif" }}>
          Have any questions or want to contact me?
        </h1>
        <p style={{ fontSize: "20px" }}>Feel free to reach out to me! </p>

        <div className="Communication">
          <div className="Phone">
            <i class="fa-3x fas fa-phone" />
            <p>Phone</p>
            <h4>(202)-213-9965</h4>
          </div>
          <div className="Email">
            <i class="fa-3x fas fa-envelope" />
            <p>Email</p>
            <h4>dionolympia@gmail.com</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
