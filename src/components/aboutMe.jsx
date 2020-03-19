import React, { Component } from "react";
import Avatar from "./avatar.png";
import LazyLoad from "react-lazy-load";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="About-me-background">
        <div className="About-me-container">
          <div className="Left">
            <LazyLoad debounce={false}>
              <img
                class="Avatar-left"
                alt="Avatar"
                src={Avatar}
                style={{
                  width: "300px",
                  opacity: "1"
                }}
              />
            </LazyLoad>
          </div>
          <div className="Left" />

          <div className="Right">
            <div className="Greeting">
              <h3
                style={{
                  color: "grey",
                  textAlign: "center"
                }}
              >
                Hi, my name is
                <div>
                  <strong
                    id="Dion-Olympia-About-Me"
                    style={{ color: "black", fontSize: "40px" }}
                  >
                    Dion Olympia
                  </strong>
                </div>
              </h3>
              <p
                id="about-me-text"
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
                development. My other hobbies include basketball, baseball,
                playing guitar, singing, & songwriting. I recently graduated
                with a Bachelor of Science in Computer Science from the
                University of Maryland, Baltimore County.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
