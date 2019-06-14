import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Background from "./home-background.jpg";
import Avatar from "./avatar.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: "auto", width: "100%" }}>
        <Grid className="Home-page">
          <Cell col={12}>
            <img style={{ display: "block", margin: "auto" }} src={Avatar} />
            <br />
            <div className="Avatar-caption">
              <h1 className="Caption-content">Software Developer</h1>
              <p className="Caption-content">
                HTML | CSS | JavaScript | C++ | C# | Python | Java | React |
                MySQL | Swift
              </p>
              <h1 className="Caption-content">Icons</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
