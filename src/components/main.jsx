import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutMe.jsx";
import Home from "./home.jsx";
import ContactMe from "./contactMe.jsx";
import Projects from "./projects.jsx";
import Resume from "./resume.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Main = () => {
  return <Home />;
};

export default Main;
