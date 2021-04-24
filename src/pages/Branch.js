import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
class Branch extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <BNavBar handleBranchLogout={this.props.handleBranchLogout} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Branch home</h1>
      </div>
    );
  }
}
export default Branch;
