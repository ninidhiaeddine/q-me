import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
class Establishment extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <ENavBar
          handleEstablishmentLogout={this.props.handleEstablishmentLogout}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>~(˘▾˘~) &nbsp; &nbsp; &nbsp; (~˘▾˘)~ </h1>
      </div>
    );
  }
}
export default Establishment;
