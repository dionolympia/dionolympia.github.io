import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  handleTabs() {
    if (this.state.activeTab == 0) {
      return <div>React</div>;
    }
    if (this.state.activeTab == 1) {
      return <div>Unity</div>;
    }
    if (this.state.activeTab == 2) {
      return <div>Other</div>;
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
        <section>{this.handleTabs()}</section>
      </div>
    );
  }
}

export default Projects;
