import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Box from "../components/Box";

class GProfile extends Component {
  state = {};

  render() {
    let txtList = ["Name", "Phone Number"];

    return (
      <div>
        <GNavBar />
        <br />
        <Box txtList={txtList} buttonText="Change Information" />
      </div>
    );
  }
}
export default GProfile;
