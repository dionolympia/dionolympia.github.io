import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from "react-mdl";
import Avatar from "./pixel.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  handleTabs() {
    if (this.state.activeTab == 0) {
      return(
        <Grid>
          <Cell col={6}>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(https://dionolympia.github.io/portfolio/project-images/port.png) center'}}>Personal Portfolio</CardTitle>
                <CardText>
                  Personal Portfolio website made with React.  Implemented with React Bootstrap, React Router V4, & Material Lite UI.
                </CardText>
                <CardActions border>
                    <Button colored>Website</Button>
                    <Button colored>Github</Button>
                </CardActions>
              </Card>
          </Cell>
          <Cell col={6}>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#000', background: 'url(https://dionolympia.github.io/portfolio/project-images/count.png) center 65% '}}>Counters</CardTitle>
                <CardText>
                    Basic counter web app created to practice basic concepts in React including: JSX, Rendering to the DOM, & Handling Events
                </CardText>
                <CardActions border>
                    <Button colored>Website</Button>
                    <Button colored>Github</Button>
                </CardActions>
              </Card>
          </Cell>
        </Grid>
        
      );
    }
    if (this.state.activeTab == 1) {
      return (
        <Grid>
          <Cell col={6}>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(https://dionolympia.github.io/portfolio/project-images/wander.png) center / cover '}}>Mountainside Wanderer</CardTitle>
                <CardText>
                  2D side-scroller, adventure iOS game developed in Unity.
                </CardText>
                <CardActions border>
                    <Button colored>Website</Button>
                    <Button colored>Github</Button>
                </CardActions>
              </Card>
          </Cell>
          <Cell col={6}>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#000', background: 'url(https://dionolympia.github.io/portfolio/project-images/flap.png) center / cover '}}>FlapGoesTheBirdie</CardTitle>
                <CardText>
                    Side-scroller arcade iOS game based on "Flappy Bird" with an added twist.
                </CardText>
                <CardActions border>
                    <Button colored>Website</Button>
                    <Button colored>Github</Button>
                </CardActions>
              </Card>
          </Cell>
        </Grid>
      );
    }
    if (this.state.activeTab == 2) {
      return (
        <Grid>
          <Cell col={4}>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(https://dionolympia.github.io/portfolio/project-images/tetris.png) center / cover '}}>Zero Gravity Tetris</CardTitle>
                <CardText>
                    
                </CardText>
                <CardActions border>
                    <Button colored>Website</Button>
                    <Button colored>Github</Button>
                </CardActions>
              </Card>
          </Cell>
          <Cell col={4}>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#000', background: 'url(https://dionolympia.github.io/portfolio/project-images/life.png) center / cover'}}>Game of Life</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Website</Button>
                    <Button colored>Github</Button>
                </CardActions>
              </Card>
          </Cell>
          <Cell col={4}>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(https://dionolympia.github.io/portfolio/project-images/ben.png) center / cover '}}>Ben 10 Battle</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
              </Card>
          </Cell>
        </Grid>
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
          <Tab>React</Tab>
          <Tab>Unity</Tab>
          <Tab>Other</Tab>
        </Tabs>
        <section>
          <Grid className = "projects-grid">
            <Cell col={12}>
              <div className="projects-content">
                {this.handleTabs()}
              </div>
            </Cell>

          </Grid>
          
        </section>
      </div>
    );
  }
}

export default Projects;
