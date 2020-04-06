import React, { Component, useState } from "react";
import Avatar from "./avatar.jpeg";
import Particles from "react-particles-js";
import PixelArt from "./project-images/pixel.png";
import Resume from "./resume.pdf";
import Tetris from "./project-images/tetris.png";
import SongSearch from "./project-images/song-search.png";
import Wanderer from "./project-images/wanderer.png";
import GameOfLife from "./project-images/game-of-life.png";

class Home extends Component {
  state = {};
  constructor(props) {
    super(props);
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
        <div className="nav" id="nav">
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
            <div className="project-contents">
              <div className="project-row">
                <div className="project-card">
                  <div class="image">
                    <img src={PixelArt} />
                    <div class="image-overlay">
                      <a>
                        <i class="fas fa-search-plus" id="search-plus" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <div class="image">
                    <img src={Wanderer} />
                    <div class="image-overlay">
                      <a href="#">
                        <i class="fas fa-search-plus" id="search-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div class="image">
                    <img src={Tetris} />
                    <div class="image-overlay">
                      <a href="#">
                        <i class="fas fa-search-plus" id="search-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-row">
                <div className="project-card">
                  <div class="image">
                    <img src={SongSearch} />
                    <div class="image-overlay">
                      <a href="#">
                        <i class="fas fa-search-plus" id="search-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div class="image">
                    <img src={GameOfLife} />
                    <div class="image-overlay">
                      <a href="#">
                        <i class="fas fa-search-plus" id="search-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume" id="resume">
          <div className="header">
            <span>Resume</span>
          </div>
          <div className="resume-contents">
            <div
              class="resume-html"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              <div class="resume-header">
                <h1>Dion Olympia</h1>
                <p>
                  Rockville, MD 20853 - (202)-213-9965 - dionolympia@gmail.com -
                  github.com/dionolympia
                </p>
              </div>
              <hr />
              <div class="section">
                <h3>Education</h3>
                <div class="section-body">
                  <p>
                    University of Maryland, Baltimore County - Baltimore, MD
                  </p>
                  <p>
                    B.S. Computer Science - (Graduated: December 2019) - GPA
                    3.094/4.0
                  </p>
                </div>
                <hr />
              </div>
              <div class="section">
                <h3>Work Experience</h3>
                <div class="section-body">
                  <p>
                    Customer Value Partners Inc. - Columbia, MD - Associate
                    Technologist (February 2020 - Present)
                  </p>
                  <ul>
                    <li>
                      Implemented REST API endpoints & SQLite database queries
                      using Node.js
                    </li>
                    <li>
                      Developed responsive, user-friendly web pages in HTML,
                      CSS, & JavaScript from designer mockups
                    </li>
                    <li>
                      Updated user interface & styling and built dynamic forms
                      for a single-page Angular application
                    </li>
                  </ul>
                </div>
                <hr />
              </div>
              <div class="section">
                <h3>Skills</h3>
                <div class="section-body">
                  <ul>
                    <li>
                      Experienced with JavaScript, HTML, CSS, MySQL, SQLite,
                      Node.js, C#, PHP
                    </li>
                    <li>
                      Familiar with Java, React, Angular, Python, C++, jQuery,
                      Swift
                    </li>
                    <li>
                      Worked with MS Office suite, Photoshop, Git, Github,
                      GitLab, Unity, Xcode, Visual Studio, Atom
                    </li>
                  </ul>
                </div>
                <hr />
              </div>
              <div class="section">
                <h3>Projects</h3>
                <div class="section-body">
                  <p>Portfolio Website</p>
                  <ul>
                    <li>
                      Personal portfolio website created with React using HTML,
                      CSS, & JavaScript
                    </li>
                    <li>
                      Utilized React Bootstrap, React Router V4, & Material Lite
                      UI
                    </li>
                  </ul>
                  <p>Game of Life</p>
                  <ul>
                    <li>
                      Collaborative course project implementing Conway's Game of
                      Life as a web application in PHP
                    </li>
                    <li>
                      Designed, developed, and tested while utilizing Agile
                      project management lifecycle to meet deadlines
                    </li>
                  </ul>
                  <p>Mountainside Wanderer</p>
                  <ul>
                    <li>
                      2D side-scroller, adventure iOS game developed in Unity -
                      graphics made with Photoshop & Piskel
                    </li>
                    <li>
                      Implemented levels, game mechanics, UI features, and
                      player stats in C#
                    </li>
                  </ul>
                  <p>SongSearch.io</p>
                  <ul>
                    <li>
                      Node.js app with a user-friendly GUI to access a music
                      database web scraped from Metrolyrics.com
                    </li>
                    <li>
                      Integrated a relational database management system (MySQL)
                      to perform queries on music data
                    </li>
                  </ul>
                </div>
                <hr />
              </div>
              <div class="section-header">
                <h3>Related Coursework</h3>
              </div>
              <div class="classes">
                <div class="left">
                  <p>Data Structures</p>
                  <p>Operating Systems</p>
                  <p>Software Engineering</p>
                </div>
                <div class="middle">
                  <p>Principles of Programming Languages</p>
                  <p>Database Management Systems</p>
                  <p>Computer Organization & Assembly Language</p>
                </div>
                <div class="right">
                  <p>Design & Analysis of Algorithms</p>
                  <p>Computer Architecture</p>
                  <p>Principles of Computer Security</p>
                </div>
              </div>
            </div>

            <a className="resume-button" href={Resume} target="_blank">
              Click to Open PDF
            </a>
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
        <div className="footer-section">
          <p>© 2020 Dion Olympia</p>
        </div>
      </div>
    );
  }
}

export default Home;
