import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Avatar from "./avatar.png";
import Particles from "react-particles-js";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <img className="Avatar" alt="Avatar" src={Avatar} />
          <div className="Avatar-caption">
            <h1 className="Caption-text">Software Developer</h1>
            <p className="Caption-text">
              HTML | CSS | JavaScript | C++ | C# | Python | Java | React | MySQL
              | Swift
            </p>
            <h1 className="Caption-text" style={{ fontWeight: "bold" }}>
              ICONS
            </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
