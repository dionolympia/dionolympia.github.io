import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landingGrid">
          <Cell col={12}>
            <h1 style={{ textAlign: "center" }}> Hello World </h1>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
