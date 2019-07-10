import React, { Component } from "react";

import Avatar from "./pixel.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="Top">
            <img className="Avatar" alt="Avatar" src={Avatar} />
          </div>
          
          <div className="Bottom">
            <div className="Avatar-caption">
              <div>
                <h1 id="Dion-Olympia" className="Caption-text"><strong>Dion Olympia</strong></h1>
              </div>
              <div>
                  <p id="line" className = "Caption-text">__________________________________</p>
                  <h3 id="Software-Developer"style={{fontFamily: "'Poppins' ,sans-serif"}}className="Caption-text">Software Developer</h3>
                  <p className="Caption-text">
                    HTML | CSS | JavaScript | C++ | C# | Python | Java | React | MySQL
                    | Swift
                  </p>
                  <h1 className="Caption-text" style={{ fontWeight: "bold" }}>
                  </h1>
              </div>
            </div>
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
