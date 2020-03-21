import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";
import Avatar from "./pixel.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  handleTabs() {
    if (this.state.activeTab == 0) {
      return (
        <div className="Project-container">
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/portfolio.png) center"
                }}
              >
                Personal Portfolio
              </CardTitle>
              <CardText>
                Personal Portfolio website made with React. Implemented with
                React Bootstrap, React Router V4, & Material Lite UI.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/dionolympia.github.io"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/songsearch.png) center 50%"
                }}
              >
                SongSearch.js
              </CardTitle>
              <CardText>
                Node JS application using routing with Express and the MySQL
                connector module to execute OLTP and OLAP queries on a music
                database web scraped from Metrolyrics.com
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/461-project"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/wander.png) center / cover "
                }}
              >
                Mountainside Wanderer
              </CardTitle>
              <CardText>
                2D side-scroller, adventure iOS game developed in Unity.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/mountainside-wanderer"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/mountainside-wanderer"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/count.png) center 65% "
                }}
              >
                Counters
              </CardTitle>
              <CardText>
                Basic counter web app created to practice fundamental concepts
                in React including: JSX, Rendering to the DOM, & Handling Events
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/counter"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/counter"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/flap.png) center / cover "
                }}
              >
                FlapGoesTheBirdie
              </CardTitle>
              <CardText>
                Side-scroller arcade iOS game based on "Flappy Bird".
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/flapgoesthebirdie"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/flapgoesthebirdie"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/tetris.png) center / cover "
                }}
              >
                Zero Gravity Tetris
              </CardTitle>
              <CardText>
                Tile-matching puzzle game based on the original “Tetris”. Game
                logic written in JavaScript and webpage design written in HTML &
                CSS, utilizing Canvas API.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/ZGTetris/"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/ZGTetris"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/life.png) center / cover"
                }}
              >
                Game of Life
              </CardTitle>
              <CardText>
                Collaborative course project implementing Conway's Game of Life
                as a web application. Webpages developed in PHP, HTML, & CSS,
                while game logic written in JavaScript.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://game-of-life-dion-olympia.herokuapp.com/"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/game-of-life"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/ben.png) center / cover "
                }}
              >
                Ben 10 Battle
              </CardTitle>
              <CardText>
                Text-based fighting simulation game that used characters from
                “Ben 10”, coded in C++.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/Ben10Battle"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    }
    if (this.state.activeTab == 1) {
      return (
        <div className="Projects-container">
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/portfolio.png) center"
                }}
              >
                Personal Portfolio
              </CardTitle>
              <CardText>
                Personal Portfolio website made with React. Implemented with
                React Bootstrap, React Router V4, & Material Lite UI.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/portfolio"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/count.png) center 65% "
                }}
              >
                Counters
              </CardTitle>
              <CardText>
                Basic counter web app created to practice fundamental concepts
                in React including: JSX, Rendering to the DOM, & Handling Events
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/counter"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/counter"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="Project-container"></div>
        </div>
      );
    }
    if (this.state.activeTab == 2) {
      return (
        <div className="Projects-container">
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/wander.png) center / cover "
                }}
              >
                Mountainside Wanderer
              </CardTitle>
              <CardText>
                2D side-scroller, adventure iOS game developed in Unity.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/mountainside-wanderer"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/mountainside-wanderer"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/flap.png) center / cover "
                }}
              >
                FlapGoesTheBirdie
              </CardTitle>
              <CardText>
                Side-scroller arcade iOS game based on "Flappy Bird".
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/flapgoesthebirdie"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/flapgoesthebirdie"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    }
    if (this.state.activeTab == 3) {
      return (
        <div>
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/songsearch.png) center 50% "
                }}
              >
                SongSearch.js
              </CardTitle>
              <CardText>
                Node JS application using routing with Express and the MySQL
                connector module to execute OLTP and OLAP queries on a music
                database web scraped from Metrolyrics.com
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/461-project"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    }
    if (this.state.activeTab == 4) {
      return (
        <div className="Projects-container">
          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/tetris.png) center / cover "
                }}
              >
                Zero Gravity Tetris
              </CardTitle>
              <CardText>
                Tile-matching puzzle game based on the original “Tetris”. Game
                logic written in JavaScript and webpage design written in HTML &
                CSS, utilizing Canvas API.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://dionolympia.github.io/ZGTetris/"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/ZGTetris"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#000",
                  background:
                    "url(https://dionolympia.github.io/project-images/life.png) center / cover"
                }}
              >
                Game of Life
              </CardTitle>
              <CardText>
                Collaborative course project implementing Conway's Game of Life
                as a web application. Webpages developed in PHP, HTML, & CSS,
                while game logic written in JavaScript.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://game-of-life-dion-olympia.herokuapp.com/"
                  colored
                >
                  Website
                </Button>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/game-of-life"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="Project-card">
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(https://dionolympia.github.io/project-images/ben.png) center / cover "
                }}
              >
                Ben 10 Battle
              </CardTitle>
              <CardText>
                Text-based fighting simulation game that used characters from
                “Ben 10”, coded in C++.
              </CardText>
              <CardActions border>
                <Button
                  style={{ color: "#000" }}
                  target="_blank"
                  href="https://github.com/dionolympia/Ben10Battle"
                  colored
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          style={{ backgroundColor: "white", opacity: ".6" }}
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>All</Tab>
          <Tab>React</Tab>
          <Tab>Unity</Tab>
          <Tab>Node JS</Tab>
          <Tab>Other</Tab>
        </Tabs>
        <section>
          <div className="projects-content">{this.handleTabs()}</div>
        </section>
      </div>
    );
  }
}

export default Projects;
