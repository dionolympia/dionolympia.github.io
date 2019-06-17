import React from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList,
  HeaderRow,
  HeaderTabs,
  Tab
} from "react-mdl";
import { Link, NavLink } from "react-router-dom";
import Main from "./components/main.jsx";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="demo-big-content" style={{ marginBottom: "0" }}>
      <Layout className="Layout" fixedHeader>
        <Particles
          className="Particles"
          params={{
            particles: {
              number: {
                value: 75
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                }
              }
            }
          }}
        />

        <Header className="Header-color" title="Dion Olympia">
          <Navigation className="Top-navigation">
            <NavLink className="Nav" to="/">
              Home
            </NavLink>
            <NavLink className="Nav" to="/aboutMe">
              About Me
            </NavLink>
            <NavLink className="Nav" to="/projects">
              Projects
            </NavLink>
            <NavLink className="Nav" to="/resume">
              Resume
            </NavLink>
            <NavLink className="Nav" to="/contactMe">
              Contact Me
            </NavLink>
          </Navigation>
        </Header>
        <Drawer title="Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contactMe">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>

        <Footer size="mini" className="Footer">
          <FooterSection type="left" />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
