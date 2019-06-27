import React, { Component } from "react";
class ContactMe extends Component {
  state = {};
  render() {
    return <div className="Contact-me-container">
      <h1 style={{fontFamily: "'Poppins' ,sans-serif"}}>Have any questions or want to contact me?</h1>
      <p>Feel free to reach out to me! </p>

      <div className="Communication">
        <div className="Phone">
          <i class="fa-3x fas fa-phone"></i>
          <p>Phone</p>
          <h6>(202)-213-9965</h6>
        </div>
        <div className="Email">
          <i class="fa-3x fas fa-envelope"></i>
          <p>Email</p>
          <h6>dionolympia@gmail.com</h6>
        </div>
      </div>

    </div>;
  }
}

export default ContactMe;
