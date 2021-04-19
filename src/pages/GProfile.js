import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Box from "../components/Box";

class GProfile extends Component {
  state = {};

  render() {
    let txtList = ["Name", "Phone Number"];
    let btnList = ["Change Information"];
    return (
      <div>
        <GNavBar />
        <br />
        <Box title="Your Profile" txtList={txtList} btnList={btnList}/>
      </div>
    );
  }
}
export default GProfile;
