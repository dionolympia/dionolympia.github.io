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
import CompPhotoThree from "../img/avatar.jpeg";
import CompPhotoOne from "../img/ph.jpg";
import CompPhotoTwo from "../img/obx.jpg";
import videoMp4 from "../img/video.mp4";
import videoWebm from "../img/video.webm";
import storyImageOne from "../img/cvp-bg.jpg";
import storyImageTwo from "../img/american-flag.jpg";

class Home extends Component {
    constructor(props) {
        super(props);
        this.toggleResponsive = this.toggleResponsive.bind(this);
        this.state = { responsive: false };
    }

    toggleResponsive() {
        const currentState = this.state.responsive;
        this.setState({ responsive: !currentState });
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
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
                    <div className="navigation__background">&nbsp;</div>
                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <a
                                    href="#about-me"
                                    className="navigation__link"
                                >
                                    About Me
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    href="#projects"
                                    className="navigation__link"
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    href="#interests"
                                    className="navigation__link"
                                >
                                    Interests
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    href="#experience"
                                    className="navigation__link"
                                >
                                    Experience
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    href="#contact-me"
                                    className="navigation__link"
                                >
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <header className="header">
                    <div className="header__logo-box">
                        <img src={Logo} alt="Logo" className="header__logo" />
                    </div>
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">
                                Dion Olympia
                            </span>
                            <span className="heading-primary--sub">
                                Software Developer
                            </span>
                        </h1>
                        <div className="header__social-links">
                            <a
                                href="https://www.github.com/dionolympia"
                                target="_blank"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://www.hackerrank.com/dionolympia"
                                target="_blank"
                            >
                                <i className="fab fa-hackerrank"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/DionOlympia"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dion-olympia-6b83b1148/"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </header>

                <main>
                    <section className="section-about">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary" id="about-me">
                                About Me
                            </h2>
                        </div>

                        <div className="row">
                            <div className="col-1-of-2">
                                <p className="paragraph">
                                    I am a passionate programmer from Rockville,
                                    Maryland who loves creating & designing web
                                    & mobile applications. My other hobbies
                                    include basketball, baseball, songwriting, &
                                    playing guitar.
                                </p>

                                <p className="paragraph">
                                    I was born in Washington, D.C. but have
                                    spent most of my life in the Wheaton, MD
                                    area. I went to John F. Kennedy High School
                                    in Silver Spring, MD where I played on the
                                    varsity baseball & basketball teams. I was
                                    also part of the orchestra, playing violin &
                                    viola.
                                </p>

                                <p className="paragraph">
                                    I recently graduated from the University of
                                    Maryland, Baltimore County (UMBC) with a
                                    B.S. in Computer Science and I currently
                                    work as an Associate Technologist (Junior
                                    Software Developer) at Customer Value
                                    Partners Inc.
                                </p>

                                {/* <a href="#" className="btn-text">
                                    Learn more &rarr;
                                </a> */}
                            </div>
                            <div className="col-1-of-2">
                                <div className="composition">
                                    <img
                                        src={CompPhotoOne}
                                        alt="Photo 1"
                                        className="composition__photo composition__photo--p1"
                                    />
                                    <img
                                        src={CompPhotoTwo}
                                        alt="Photo 2"
                                        className="composition__photo composition__photo--p2"
                                    />
                                    <img
                                        src={CompPhotoThree}
                                        alt="Photo 3"
                                        className="composition__photo composition__photo--p3"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-projects">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2
                                className="heading-secondary heading-secondary--white"
                                id="projects"
                            >
                                Projects
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front card__side--front-1">
                                        <div className="card__picture card__picture--1">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">
                                                Portfolio Website
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>React JS</li>
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
                                                    Portfolio website created
                                                    with React JS to showcase
                                                    side projects and
                                                    experience. I believe
                                                    sharing knowledge with one
                                                    another is a key to success.
                                                    Please see Jonas
                                                    Schmedtmann's "Advanced CSS
                                                    and Sass..." course on Udemy
                                                    if you're interested in
                                                    learning how to make
                                                    responsive & interactive web
                                                    pages like this portfolio.
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
                                        <div className="card__picture card__picture--2">
                                            &nbsp;
                                        </div>
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
                                                    2D side-scroller adventure
                                                    iOS game developed in Unity.
                                                    Implemented multiple levels,
                                                    game mechanics, UI, and
                                                    player stats in C#.
                                                    Custom-made pixel-art style
                                                    graphics created with Adobe
                                                    Photoshop.
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
                                        <div className="card__picture card__picture--3">
                                            &nbsp;
                                        </div>
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
                                                    Based on the classic Tetris
                                                    game, without the falling
                                                    pieces. Implemented using
                                                    JavaScript & HTML's Canvas
                                                    API. New features like
                                                    combos and items coming
                                                    soon. Great for players who
                                                    love stacking blocks, but
                                                    hate making mistakes!
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
                                        <div className="card__picture card__picture--4">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--4">
                                                Song Searcher
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>Node JS</li>
                                                <li>MySQL Database</li>
                                                <li>Rest API</li>
                                                <li>
                                                    Search by artist, lyrics, &
                                                    more!
                                                </li>
                                                <li>Web-scraped music data</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card__side card__side--back card__side--back-4">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">
                                                    A group project for my
                                                    Database Management Systems
                                                    course at UMBC. Learned how
                                                    to handle HTTP requests by
                                                    implementing REST API
                                                    endpoints. Also developed
                                                    efficient database queries &
                                                    schema design, while
                                                    preventing security
                                                    vulnerabilities such as SQL
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
                                        <div className="card__picture card__picture--5">
                                            &nbsp;
                                        </div>
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
                                                    A group project for my
                                                    Software Engineering course
                                                    at UMBC. The group was
                                                    assigned a client and we
                                                    gained experienced
                                                    communicating, documenting,
                                                    and delivering software
                                                    requirements, while
                                                    utilizing Agile developement
                                                    methodologies.
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
                                        <div className="card__picture card__picture--6">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--6">
                                                Sudoku Solver
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>HTML/CSS & JS</li>
                                                <li>Simple/Elegant Design</li>
                                                <li>
                                                    Helpful colors & animations
                                                </li>
                                                <li>
                                                    Generates thousands of
                                                    boards
                                                </li>
                                                <li>
                                                    Solves games & detects
                                                    errors
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card__side card__side--back card__side--back-6">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">
                                                    Love solving Sudoku puzzles?
                                                    Try out this web app to play
                                                    thousands of different
                                                    boards with helpful features
                                                    like error detector and
                                                    auto-solver. Compatible with
                                                    computers or mobile devices.
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
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary" id="interests">
                                Interests
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <i className="feature-box__icon icon-basic-webpage-img-txt"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Web Development
                                    </h3>
                                    <p className="feature-box__text">
                                        Front-end web development using
                                        technologies and frameworks such as
                                        HTML, CSS, JavaScript, React, Angular,
                                        and Node JS
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
                                        Implementing, designing, & querying SQL
                                        databases, and developing user-friendly
                                        data analytics dashboards.
                                    </p>
                                </div>
                            </div>
                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    {/* <i className="feature-box__icon icon-basic-settings"></i> */}
                                    <img
                                        className="feature-box__icon"
                                        src="https://img.icons8.com/carbon-copy/100/000000/controller.png"
                                        id="game-controller"
                                    />
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Game Development
                                    </h3>
                                    <p className="feature-box__text">
                                        Creating PC & iOS games using Unity &
                                        XCode
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
                                        Editing & designing images with Adobe
                                        Photoshop for games and websites.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="u-center-text u-margin-top-big">
                            <a href="#" className="btn btn--orange">
                                Discover all tours
                            </a>
                        </div> */}
                    </section>
                    <section className="section-stories">
                        {/* <div className="bg-video">
                            <video
                                className="bg-video__content"
                                autoPlay
                                muted
                                loop
                            >
                                <source src={videoMp4} type="video/mp4" />
                                <source src={videoWebm} type="video/webm" />
                                Your browser is not supported!
                            </video>
                        </div> */}
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary" id="experience">
                                Experience
                            </h2>
                        </div>
                        <div className="row">
                            <div className="story">
                                <div className="story__shape">
                                    <img
                                        className="story__image"
                                        src={storyImageOne}
                                        alt="Person on a tour"
                                    />
                                    <figcaption className="story__caption">
                                        CVP
                                    </figcaption>
                                </div>
                                <div className="story__text">
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Customer Value Partners Inc. (Associate
                                        Technologist)
                                    </h3>
                                    <p>
                                        Implemented REST API & SQLite database
                                        queries with Node JS, developed
                                        responsive, user-friendly web pages from
                                        mockup designs, and updated UI / styling
                                        for a single-page Angular application.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="story">
                                <div className="story__shape">
                                    <img
                                        className="story__image"
                                        src={storyImageTwo}
                                        alt="Person on a tour"
                                    />
                                    <figcaption className="story__caption">
                                        HHS-OIG
                                    </figcaption>
                                </div>
                                <div className="story__text">
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Department of Health and Human Services
                                        (Contractor)
                                    </h3>
                                    <p>
                                        As a Junior Software Developer, worked
                                        on front-end web design for the Office
                                        of Inspector General (OIG) data
                                        analytics / business intelligence tools
                                        team, and utilized web browser testing
                                        software & developed Python scripts to
                                        automate ETL processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="u-center-text u-margin-top-huge">
                            <a
                                href={Resume}
                                target="_blank"
                                className="btn-text"
                            >
                                View Full Resume &rarr;
                            </a>
                        </div>
                    </section>
                    <section className="section-contact">
                        <div className="row u-center-text u-margin-bottom-medium">
                            <h2 className="heading-secondary" id="contact-me">
                                Contact Me
                            </h2>
                        </div>

                        <div className="contact-me">
                            <p className="contact-me__text">
                                Have any questions or want to get in touch?
                            </p>
                            <p className="contact-me__text">
                                Feel free to reach out!
                            </p>

                            <div className="contact-me__phone-section">
                                <i className="fa-3x fas fa-phone contact-me__icon--phone" />
                                <p className="contact-me__label">Phone</p>
                                <p className="contact-me__phone-number">
                                    (202)-213-9965
                                </p>
                            </div>

                            <div className="contact-me__email-section">
                                <i className="fa-3x fas fa-envelope contact-me__icon--email" />
                                <p className="contact-me__label">Email</p>
                                <p className="contact-me__email">
                                    dionolympia@gmail.com
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    <div className="footer__logo-box">
                        <img
                            src={Logo}
                            alt="Full logo"
                            className="footer__logo"
                        />
                        <span className="footer__logo-text">Dion Olympia</span>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <a
                                            href="#about-me"
                                            className="footer__link"
                                        >
                                            About Me
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a
                                            href="#projects"
                                            className="footer__link"
                                        >
                                            Projects
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a
                                            href="#interests"
                                            className="footer__link"
                                        >
                                            Interests
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a
                                            href="#experience"
                                            className="footer__link"
                                        >
                                            Experience
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a
                                            href="#contact-me"
                                            className="footer__link"
                                        >
                                            Contact Me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            <p className="footer__copyright">
                                Copyright &copy; 2020 - Dion Olympia
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
