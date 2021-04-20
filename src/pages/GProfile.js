import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Box from "../components/Box";

class GProfile extends Component {
  state = {
    name: "N/A",
    phoneNumber: "N/A",
    password: "N/A",
  };

  render() {
    let txtList = ["Name:", "Phone Number:", "Password:"];
    let valuesList = [
      this.state.name,
      this.state.phoneNumber,
      this.state.password,
    ];
    let btnList = ["Change Information"];

    return (
      <div>
        <GNavBar />
        <br />
        <Box
          title="Your Profile"
          txtList={txtList}
          valuesList={valuesList}
          btnList={btnList}
          renderDivider={true}
        />
      </div>
    );
  }
}
export default GProfile;
