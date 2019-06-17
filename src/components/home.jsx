import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Avatar from "./avatar.png";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <div className="Social-links">
                <a href="https://www.github.com/dionolympia" target="_blank">
                  <i class="fab fa-github" />
                </a>
                <a
                  href="https://www.hackerrank.com/dionolympia"
                  target="_blank"
                >
                  <i class="fab fa-hackerrank" />
                </a>
                <a href="https://www.facebook.com/DionOlympia" target="_blank">
                  <i class="fab fa-facebook-square" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dion-olympia-6b83b1148/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" />
                </a>
              </div>
            </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
