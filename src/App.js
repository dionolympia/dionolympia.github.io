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
import { Link } from "react-router-dom";
import Main from "./components/main.js";

function App() {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <Header className="Header-color" title="Dion Olympia" scroll>
          <Navigation className="Top-navigation">
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contactMe">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer title="Dion Olympia - Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contactMe">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Main />
            <Footer className="Home-page" size="mini">
              <FooterSection type="left">
                <FooterLinkList />
              </FooterSection>
            </Footer>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
