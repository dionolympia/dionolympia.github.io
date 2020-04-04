import React, { Component, useState } from "react";
import Avatar from "./tux-landscape.jpeg";
import Particles from "react-particles-js";
import { Card, Button } from "react-bootstrap";
import PixelArt from "./pixel.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.aboutMeRef = React.createRef();
    this.projectsRef = React.createRef();

    this.scrollToAbout = this.scrollToAbout.bind(this);
    this.scrollToProjects = this.scrollToProjects.bind(this);
  }

  scrollToAbout() {
    window.scroll(0, this.aboutMeRef.current.offsetTop);
  }
  scrollToProjects() {
    window.scroll(0, this.projectsRef.current.offsetTop);
  }

  render() {
    return (
      <div className="return">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              size: {
                value: 6,
                random: false,
              },
            },
            move: {
              speed: 1,
              out_mode: "bounce",
            },
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "-1",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#333",
          }}
        />
        <div className="nav">
          <ul>
            <li>
              <a href="#intro-section">Home</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume </a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </div>
        <div className="home">
          <div className="intro-section" id="intro-section">
            <div className="name">
              <span>Dion Olympia</span>
            </div>
            <div className="software-developer">
              <span> Software Developer</span>
            </div>
            <div className="skills">
              <p>
                HTML | CSS | JavaScript | C# | PHP | Angular | React | Node.js |
                MySQL
              </p>
            </div>
            <div className="social-links">
              <a href="https://www.github.com/dionolympia" target="_blank">
                <i class="fab fa-github" />
              </a>
              <a href="https://www.hackerrank.com/dionolympia" target="_blank">
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
          <div className="about-me" id="about-me" ref={this.aboutMeRef}>
            <div className="header">
              <span>About Me</span>
            </div>
            <div className="about-me-contents">
              <div className="about-me-left">
                <div className="avatar-wrap">
                  <img class="about-me-avatar" alt="Avatar" src={Avatar} />
                </div>
              </div>
              <div className="about-me-right">
                <div className="about-me-body">
                  I am a passionate programmer from Rockville, Maryland who
                  loves creating & designing web & mobile applications. My other
                  hobbies include basketball, baseball, singing, songwriting, &
                  playing guitar.
                  <br /> <hr />I recently graduated with a Bachelor of Science
                  in Computer Science from the University of Maryland, Baltimore
                  County. I am currently working as an Associate Software
                  Developer at Customer Value Partners Inc.
                </div>
              </div>
            </div>
          </div>

          <div className="projects" id="projects" ref={this.projectsRef}>
            <div className="header">
              <span>Projects</span>
            </div>
            <div className="project-contents"></div>
          </div>
        </div>
        <div className="resume" id="resume">
          <div className="header">
            <span>Resume</span>
          </div>
        </div>
        <div className="contact-me" id="contact-me">
          <div className="header">
            <span>Contact Me</span>
            <br />
            <br />
          </div>
          <div className="contact-me-contents">
            <span>Have any questions or want to get in touch?</span>

            <p>Feel free to reach out! </p>

            <div className="phone-number">
              <i class="fa-3x fas fa-phone" />
              <p>Phone</p>
              <p>(202)-213-9965</p>
            </div>
            <hr className="line"></hr>
            <div className="email-address">
              <i class="fa-3x fas fa-envelope" />
              <p>Email</p>
              <p>dionolympia@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-section"></div>
      </div>
    );
  }
}

export default Home;
