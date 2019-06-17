import React, { Component } from "react";
class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="Page">
        <div className="Section Header">
          <h1>Dion Olympia</h1>
          <p>
            Rockville, MD 20853 - dionolympia@gmail.com - (202)-213-9965 -
            github.com/dionolympia
          </p>
        </div>
        <div className="Section Education">
          <h2>Education</h2>
          <p>
            University of Maryland, Baltimore County - Baltimore, MD (Expected:
            December 2019)
          </p>
          <p>B.S. Computer Science - GPA 3.026/4.0</p>
        </div>
        <div className="Section Projects">
          <h2>Projects</h2>
          <h3>Portfolio Website</h3>
          <ul>
            <li>
              Personal portfolio created with React -
              (http://dionolympia.github.io/portfolio)
            </li>

            <li>
              Worked with React Bootstrap, React Router V4, & Material Lite UI
            </li>
          </ul>
          <h3>Mountainside Wanderer</h3>
          <ul>
            <li>2D side-scroller, adventure iOS game developed in Unity</li>
            <li>
              Implemented levels, game mechanics, UI features, and playerstats
              in C#
            </li>
            <li>
              Graphics comprised mostly of custom-made digital art with
              Photoshop & Piskel
            </li>
          </ul>
          <h3>“Ben 10” Battle</h3>
          <ul>
            <li>
              Text-based fighting simulation game that used characters from “Ben
              10”, coded in C++{" "}
            </li>
            <li>Used encapsulation, multiple inheritance, and polymorphism</li>
            <li>
              Involved dynamic memory allocation, pointer dereferencing, and I/O
              handling
            </li>
          </ul>
        </div>
        <div className="Section Skills">
          <h2>Skills</h2>
          <ul>
            <li>Proficient in C++, C#, JavaScript, HTML, CSS, Python</li>
            <li>
              Familiar with Java, Node.js, React, Bootstrap, MySQL, SQL, Swift
            </li>
            <li>
              Worked with MS Office suite, Photoshop, Git, Github, Unity, Xcode
            </li>
          </ul>
        </div>
        <div className="Section Work-experience">
          <h2>Work-experience</h2>
        </div>
        <div className="Section Volunteer-experience">
          <h2>Volunteer-experience</h2>
        </div>
      </div>
    );
  }
}

export default Resume;
