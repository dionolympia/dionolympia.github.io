import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Avatar from "./avatar.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home-background">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <Grid className="Home-page">
          <Cell col={12}>
            <div>
              <img
                className="Avatar"
                alt="Avatar"
                style={{
                  display: "block",
                  margin: "auto"
                }}
                src={Avatar}
              />
            </div>
          </Cell>
          <Cell col={12}>
            <div className="Caption-wrapper">
              <div className="Avatar-caption">
                <h1 className="Caption-content">Software Developer</h1>
                <p className="Caption-content">
                  HTML | CSS | JavaScript | C++ | C# | Python | Java | React |
                  MySQL | Swift
                </p>
                <h1 className="Caption-content" style={{ fontWeight: "bold" }}>
                  Icons
                </h1>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
