import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div className="Resume">
            <div className="Section Header">
              <h1>Dion Olympia</h1>
              <p>
                Rockville, MD 20853 - dionolympia@gmail.com - (202)-213-9965 -
                github.com/dionolympia
              </p>
            </div>
            <div className="Section Education">
              <h5>
                <strong>Education</strong>
              </h5>
              <p>
                University of Maryland, Baltimore County - Baltimore, MD - (GPA
                3.094/4.0)
              </p>
              <p>B.S. Computer Science - (Dec 2019)</p>
            </div>
            <div className="Section Work-experience">
              <h5>
                <strong>Work Experience</strong>
              </h5>

              <h6>Customer Value Partners - Software Developer</h6>
              <h6>(Feb 2020 - Present)</h6>
              <ul>
                <li>Implemented a REST API server using Node.js</li>
                <li>
                  Worked on the front-end (user interface) of an Angular.js
                  application
                </li>
                <li>Developed and managed databases with SQLite3 RDBMS</li>
              </ul>
            </div>
            <div className="Section Projects">
              <h5>
                <strong>Projects</strong>
              </h5>
              <h6>Portfolio Website</h6>
              <ul>
                <li>
                  Personal portfolio created with React -
                  (http://dionolympia.github.io)
                </li>

                <li>
                  Worked with React Bootstrap, React Router V4, & Material Lite
                  UI
                </li>
              </ul>
              <h6>Mountainside Wanderer</h6>
              <ul>
                <li>2D side-scroller, adventure iOS game developed in Unity</li>
                <li>
                  Implemented levels, game mechanics, UI features, and
                  playerstats in C#
                </li>
                <li>
                  Graphics comprised mostly of custom-made digital art with
                  Photoshop & Piskel
                </li>
              </ul>
              <h6>Zero Gravity Tetris</h6>
              <ul>
                <li>
                  Tile-matching puzzle game based on the original “Tetris” -
                  (https://dionolympia.github.io/ZGTetris)
                </li>
                <li>
                  Game logic written in JavaScript and webpage design written in
                  HTML & CSS, utilizing Canvas API
                </li>
              </ul>
              <h6>Game of Life Web App</h6>
              <ul>
                <li>
                  Collaborative course project implementing Conway's Game of
                  Life as a web application <br></br> -
                  (https://game-of-life-dion-olympia.herokuapp.com/)
                </li>
                <li>
                  Webpages developed in PHP, HTML, & CSS, while game logic
                  written in JavaScript
                </li>
              </ul>
            </div>
            <div className="Section Skills">
              <h5>
                <strong>Skills</strong>
              </h5>
              <ul>
                <li>Proficient in C++, C#, JavaScript, HTML, CSS, Python</li>
                <li>
                  Familiar with Java, Node.js, React, Bootstrap, MySQL, SQL,
                  Swift
                </li>
                <li>
                  Worked with MS Office suite, Photoshop, Git, Github, Unity,
                  Xcode
                </li>
              </ul>
            </div>

            <div className="Section Volunteer-experience">
              <h5>
                <strong>Volunteer-experience</strong>
              </h5>

              <h6>Paul’s Place, Inc. - Baltimore, MD</h6>
              <h6>(March 2016 - April 2016)</h6>
              <ul>
                <li>Completed data entry tasks with Microsoft Excel</li>
                <li>
                  Assisted head-directors with organizing daily programs to
                  provide to guests
                </li>
                <li>
                  Contributed to a safe, friendly environment by exhibiting
                  kindness and respect to fellow volunteers and Paul Place
                  guests
                </li>
              </ul>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Resume;
