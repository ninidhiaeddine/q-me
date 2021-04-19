import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Box from "../components/Box";

class GProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <GNavBar />
        <br />
        <Box
        button="Change Information"
         />
      </div>
    );
  }
}
export default GProfile;
