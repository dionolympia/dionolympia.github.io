import React, { Component, useState } from "react";
import Avatar from "../img/avatar-tux.jpeg";
import Particles from "react-particles-js";
import PixelArt from "./project-images/pixel.png";
import Resume from "./resume.pdf";
import Tetris from "./project-images/tetris.png";
import SongSearch from "./project-images/song-search.png";
import Wanderer from "./project-images/wanderer.png";
import GameOfLife from "./project-images/game-of-life.png";
import Sudoku from "./project-images/sudoku.png";
import Logo from "../img/logo.svg";
import CompPhotoTwo from "../img/avatar.jpeg";
import CompPhotoOne from "../img/vineyard.jpg";
import CompPhotoThree from "../img/profile-pic-wv.png";
import HeaderLogo from "../img/DO_logo.svg";
import videoMp4 from "../img/video.mp4";
import videoWebm from "../img/video.webm";
import CvpImage from "../img/cvp-custom.png";
import OigImage from "../img/oig-custom.png";
import DhsImage from "../img/dhs-custom.png";
import EpaImage from "../img/epa-custom.png";
import FpsImage from "../img/fps-custom.png";
import $ from 'jquery';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { responsive: false, modalOpen: false};
    this.top = this.top.bind(this);


    $("#sendMessage").on("click", function() {
      $.ajax({
          url: "//formspree.io/dionolympia@gmail.com", 
          method: "POST",
          data: {message: "hello!"},
          dataType: "json"
      });
    });
  }

  toggleResponsive() {
    const currentState = this.state.responsive;
    this.setState({ responsive: !currentState });
  }

  top(){
    $("html, body").animate({ scrollTop: "0px" });
  }

  emailModal() {
    const currentState = this.state.modalOpen;
    // console.log(this.state);
    if(!currentState){
      document.getElementById("emailModal").style.display = "block";
      document.body.style.overflowY = "none";
      console.log("email modal true");
    }
    else{
      document.getElementById("emailModal").style.display = "none";
      document.body.style.overflowY = "scroll";
      console.log("email modal false");
    }
    this.setState({ modalOpen: !currentState });
  
    
  }

  render() {
    return (
      <div className="return">
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button" tabIndex="0">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">

          

          </div>

          <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a href="#about-me" className="navigation__link">
                    About Me
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#experience" className="navigation__link">
                    Experience
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#projects" className="navigation__link">
                    Projects
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#interests" className="navigation__link">
                    Interests
                  </a>
                </li>
                <li className="navigation__item navigation__last-item">
                  <a href="#contact-me" className="navigation__link">
                    Contact Me
                  </a>
                </li>
                <div className="header__social-links">
              <a href="https://www.github.com/dionolympia" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.hackerrank.com/dionolympia" target="_blank">
                <i className="fab fa-hackerrank"></i>
              </a>
              <a href="https://www.facebook.com/DionOlympia" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dion-olympia-6b83b1148/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
              </ul>

            </nav>

        </div>
        <header className="header">
          <div className="test">
            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Dion Olympia</span>
                <span className="heading-primary--sub">Software Engineer</span>
              </h1>
              
            </div>
          </div>
    
          <div className="header__logo-box">
          <img
                    src={HeaderLogo}
                    alt="Dion Olympia Logo"
                    className="header__logo"
                  />
          </div>
      
          
        </header>

        <main>
          <section className="section-about">
          

            <div className="row">
            <div className="u-left-text u-margin-bottom-big">
              <h2 className="heading-secondary heading-secondary--white" id="about-me">
                About Me
              </h2>
            </div>
              <div className="col-1-of-2">
                <p className="paragraph">
                  I am a passionate programmer from Rockville, Maryland who
                  loves creating & designing web & mobile applications. My other
                  hobbies include basketball, baseball, songwriting, & playing
                  guitar.
                </p>

                <p className="paragraph">
                  I was born in Washington, D.C. but have spent most of my life
                  in Montgomery County, Maryland. I went to John F. Kennedy High School
                  in Silver Spring, MD where I played on the varsity baseball &
                  basketball teams. I was also part of the orchestra, playing
                  violin & viola.
                </p>

                <p className="paragraph">
                  I recently graduated from the University of Maryland,
                  Baltimore County (UMBC) with a B.S. in Computer Science and I
                  currently work as an Associate Technologist (Junior Software
                  Engineer) at Customer Value Partners Inc.
                </p>

                {/* <a href="#" className="btn-text">
                                    Learn more &rarr;
                                </a> */}
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={CompPhotoOne}
                    alt="kayaking in the Philippines"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src={CompPhotoTwo}
                    alt="on the beach in the Outer Banks"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={CompPhotoThree}
                    alt="photo of me in a tuxedo"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-stories">
            <div className="row">
              <div className="u-left-text">
                <h2 className="heading-secondary heading-secondary--white" id="experience">
                  Experience
                </h2>
              </div>
            </div>
            <div className="row">
            <div className="story">
                <div className="story__shape">
                  <img
                    className="story__image"
                    src={CvpImage}
                    alt="CVP (Customer Value Partners)"
                  />
                </div>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Customer Value Partners Inc. (Associate Technologist)
                    <span className="duration" style={{float: "right", fontWeight: 800}}>February 2020 - Present</span>
                  </h3>
                  <p>
                    As a Software Engineer, 2+ years of experience in providing IT consulting for projects across multiple government agencies.  Worked on many teams, while specializing in full-stack web development. Recruited in 2019 by CVP's College-Hire program.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <div className="story__shape">
                  <img
                    className="story__image"
                    src={OigImage}
                    alt="HHS-OIG (Health & Human Services - Office of Inspector General)"
                  />
                </div>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Department of Health and Human Services (Contractor)
                    <span className="duration" style={{float: "right", fontWeight: 800}}>April 2020 - July 2020</span>
                  </h3>
                  <p>
                    As a Junior Software Developer, worked on front-end web
                    design for the Office of Inspector General (OIG) data
                    analytics / business intelligence tools team, and utilized
                    web browser testing software & developed Python scripts to
                    automate ETL processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <div className="story__shape">
                  <img
                    className="story__image"
                    src={DhsImage}
                    alt="DHS (Department of Homeland Security)"
                  />
                </div>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Department of Homeland Security (Contractor)
                    <span className="duration" style={{float: "right", fontWeight: 800}}>July 2020 - September 2020</span>
                  </h3>
                  <p>
                    As a C#/.NET Developer, worked on front-end and back-end web
                    development to maintain and provide updates to a web
                    application for automating and organizing workflows for
                    processing environmental reviews of DHS projects. Utilized
                    the .NET MVC Framework, Oracle databases, and AWS RDS
                    Console.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <div className="story__shape">
                  <img
                    className="story__image"
                    src={FpsImage}
                    alt="FPS (Federal Protective Service)"
                  />
                </div>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Federal Protective Service (Contractor)
                    <span className="duration" style={{float: "right", fontWeight: 800}}>October 2020 - September 2020</span>
                  </h3>
                  <p>
                    As a C#/.NET Developer, 
                    provided maintainance and enhancements to a web
                    application for overseeing staffing of contract security officers. Utilized
                    the .NET MVC Framework, Entity Framework, and MS SQL Server
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <div className="story__shape">
                  <img
                    className="story__image"
                    src={EpaImage}
                    alt="FPS (Federal Protective Service)"
                  />
                </div>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Environmental Protection Agency (Contractor)
                    <span className="duration" style={{float: "right", fontWeight: 800}}>October 2020 - Present</span>
                  </h3>
                  <p>
                    As a Full-Stack Developer, 
                    providing software development to modernize the Clean Air Markets Division (CAMD) application portfolio.
                    Utilizing React.js and NestJS for front-end and back-end respectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href={Resume} target="_blank" className="btn-text">
                View Full Resume &rarr;
              </a>
            </div>
          </section>

          <section className="section-projects">
           
            <div className="row">
            <div className="u-left-text u-margin-bottom-big">
              <h2
                className="heading-secondary heading-secondary--white"
                id="projects"
              >
                Projects
              </h2>
            </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card__side--front-1">
                    <div className="card__picture card__picture--1">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        Portfolio Website
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>React.js</li>
                        <li>Sassy CSS (.scss)</li>
                        <li>Responsive Design</li>
                        <li>Advanced Animations</li>
                        <li>Component-driven Design</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          Portfolio website created with React.js to showcase
                          side projects and experience. I believe sharing
                          knowledge with one another is a key to success. Please
                          see Jonas Schmedtmann's "Advanced CSS and Sass..."
                          course on Udemy if you're interested in learning how
                          to make responsive & interactive web pages like this
                          portfolio.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/dionolympia/dionolympia.github.io"
                        className="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card__side--front-2">
                    <div className="card__picture card__picture--2">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        Mountainside Wanderer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>C#</li>
                        <li>Unity Game Engine</li>
                        <li>2D Side-Scroller</li>
                        <li>Photoshop & Piskel</li>
                        <li>Items, combat, & more!</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          2D side-scroller adventure iOS game developed in
                          Unity. Implemented multiple levels, game mechanics,
                          UI, and player stats in C#. Custom-made pixel-art
                          style graphics created with Adobe Photoshop.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/dionolympia/mountainside-wanderer"
                        className="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card__side--front-3">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        Zero-gravity Tetris
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>HTML/CSS & JS</li>
                        <li>Canvas API</li>
                        <li>Simple Graphics</li>
                        <li>Easy to learn</li>
                        <li>Based on classic game</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          Based on the classic Tetris game, without the falling
                          pieces. Implemented using JavaScript & HTML's Canvas
                          API. New features like combos and items coming soon.
                          Great for players who love stacking blocks, but hate
                          making mistakes!
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/dionolympia/ZGTetris"
                        className="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card__side--front-4">
                    <div className="card__picture card__picture--4">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--4">
                        Song Searcher
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>Node.js</li>
                        <li>MySQL Database</li>
                        <li>Rest API</li>
                        <li>Search by artist, lyrics, & more!</li>
                        <li>Web-scraped music data</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card__side card__side--back card__side--back-4">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          A group project for my Database Management Systems
                          course at UMBC. Learned how to handle HTTP requests by
                          implementing REST API endpoints. Also developed
                          efficient database queries & schema design, while
                          preventing security vulnerabilities such as SQL
                          injection.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/dionolympia/461-project"
                        className="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card__side--front-5">
                    <div className="card__picture card__picture--5">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--5">
                        Conway's Game of Life
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>PHP, HTML/CSS, & JS</li>
                        <li>Heroku</li>
                        <li>Borderless simulation</li>
                        <li>Intuitive UI</li>
                        <li>Gameplay customization</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card__side card__side--back card__side--back-5">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          A group project for my Software Engineering course at
                          UMBC. The group was assigned a client and we gained
                          experienced communicating, documenting, and delivering
                          software requirements, while utilizing Agile
                          developement methodologies.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/dionolympia/game-of-life"
                        className="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card__side--front-6">
                    <div className="card__picture card__picture--6">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--6">
                        Sudoku Solver
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>HTML/CSS & JS</li>
                        <li>Simple/Elegant Design</li>
                        <li>Helpful colors & animations</li>
                        <li>Generates thousands of boards</li>
                        <li>Solves games & detects errors</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card__side card__side--back card__side--back-6">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          Love solving Sudoku puzzles? Try out this web app to
                          play thousands of different boards with helpful
                          features like error detector and auto-solver.
                          Compatible with computers or mobile devices.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/dionolympia/sudoku-solver"
                        className="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-tours">
            
            <div className="row">
            <div className="u-left-text u-margin-bottom-big">
              <h2 className="heading-secondary heading-secondary--white" id="interests">
                Interests
              </h2>
            </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-webpage-img-txt"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Web Development
                  </h3>
                  <p className="feature-box__text">
                    Front-end web development using technologies and frameworks
                    such as HTML, CSS, JavaScript, React, Angular, and Node.js
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-server2"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Data Science
                  </h3>
                  <p className="feature-box__text">
                    Implementing, designing, & querying SQL databases, and
                    developing user-friendly data analytics dashboards.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-joypad"></i>
                  {/* <img
                    className="feature-box__icon"
                    src="https://img.icons8.com/carbon-copy/100/000000/controller.png"
                    id="game-controller"
                  /> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Game Development
                  </h3>
                  <p className="feature-box__text">
                    Creating PC & iOS games using Unity & XCode
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-picture"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Digital Art
                  </h3>
                  <p className="feature-box__text">
                    Editing & designing images with Adobe Photoshop for games
                    and websites.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section-contact">
            

              <div className="row u-left-text u-margin-bottom-medium">
                <h2 className="heading-secondary heading-secondary--white" id="contact-me">
                  Contact Me
                </h2>
              </div>

            
            <div className="contact-me container">

            <div className="row">
             
              <div className="col-1-of-2">
                <a  href="tel:+12022139965">
                  <div className="contact-me__phone-section">
                  <i className="fa-3x fas fa-phone contact-me__icon--phone" />
                  <p className="contact-me__label">Phone</p>
                  <p className="contact-me__phone-number">(202)-213-9965</p>
                </div>
                </a>
              

          
              </div>


              <div className="col-1-of-2">
                {/* <a href="mailto:dionolympia@gmail.com"> */}

                  <div className="contact-me__email-section" onClick={this.emailModal.bind(this)}>
                    <i className="fa-3x fas fa-envelope contact-me__icon--email" />
                    <p className="contact-me__label">Email</p>
                    <p className="contact-me__email">dionolympia@gmail.com</p>
                  </div>
      
                    
                {/* </a> */}
             
              </div>
            </div>
             

             
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__logo-box">
            <img src={Logo} alt="Full logo" className="footer__logo" />
            <span className="footer__logo-text">Dion Olympia</span>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#about-me" className="footer__link">
                      About Me
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#experience" className="footer__link">
                      Experience
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#projects" className="footer__link">
                      Projects
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#interests" className="footer__link">
                      Interests
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#contact-me" className="footer__link">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Copyright &copy; {new Date().getFullYear()} - Dion Olympia
              </p>
            </div>
          </div>
        </footer>
        <button onClick={this.top} id="myBtn" title="Go to top">&#8593;</button>
        <div id="emailModal">
          <div id="emailForm"> 


           <div onClick={this.emailModal.bind(this)} id="closeModalButton"></div>

            <form
              action="https://formspree.io/f/mqkgdnlk"
              method="POST"
            >
              {/* <div className="formInput" > 
                <label>
                Your email:
                <input required className="square" type="email" name="_replyto"/>
              </label></div>
             <div className="formInput" >
             <label>
                Your message:
           
              </label>
              
             </div>
             <div>
             <textarea required className="square" name="message"></textarea>
             </div>
           <div>
           <button id="testSend" type="submit">Send</button>
           </div> */}

              <label class="label" for="input">Your Email:</label>
                <input required class="input" type="email" name="_replyto" id="input"/>
                
                <label class="label" for="textarea">Your Message:</label>
                <textarea required class="textarea" id="textarea" name="message"></textarea>
        
                <button id="sendEmail" type="submit">Send</button>

            
    
            </form>


          </div>

        

        </div>

      </div>
    );
  }
}

export default Home;
