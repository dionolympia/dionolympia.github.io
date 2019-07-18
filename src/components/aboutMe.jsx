import React, { Component } from "react";
import Avatar from "./pixel.png";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="About-me-background">
          <div className="About-me-container">
            <div className="Left">
              <img
                alt="Avatar"
                src={Avatar}
                style={{ width: "250px", opacity: "1", marginTop: "20px" }}
              />
            </div>

            <div className="Right">
              <div className="Greeting">
                <h3
                  style={{
                    color: "grey",
                    textAlign: "center",
                    marginLeft: "10px"
                  }}
                >
                  Hi there! My name is
                  <div>
                    <strong style={{ color: "black" }}>Dion Olympia</strong>
                  </div>
                </h3>
              </div>

              <p
                style={{
                  fontFamily: "'Poppins' ,sans-serif",
                  textAlign: "center",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px"
                }}
              >
                I am a passionate software developer from Rockville, Maryland. I
                enjoy the logic and structure of coding and love web & mobile
                development. I have experience coding in HTML, CSS, JavaScript,
                Python, C++, and C#. I am currently working towards my B.S. in
                Computer Science at the University of Maryland, Baltimore
                County.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
