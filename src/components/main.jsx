import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutMe.jsx";
import Home from "./home.jsx";
import ContactMe from "./contactMe.jsx";
import Projects from "./projects.jsx";
import Resume from "./resume.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Main = () => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/aboutMe" component={AboutMe} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contactMe" component={ContactMe} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Main;
