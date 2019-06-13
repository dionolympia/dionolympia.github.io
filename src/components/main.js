import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutMe";
import Home from "./home";
import ContactMe from "./contactMe";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/contactMe" component={ContactMe} />
    </Switch>
  );
};

export default Main;
