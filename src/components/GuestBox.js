import React, { Component } from "react";
import Box from "./Box";

class GuestBox extends Component {
  render() {
    // props we have are: {branch}
    // variable declarations:
    let guest = this.props.guest;
    let txtList = ["Name:", "Phone Number:"];
    let valuesList = [guest.name, guest.phoneNumber];
    let btnList = ["Edit Information"];

    // return the branch box after rendering:
    return (
      <Box
        title="Guest Profile"
        txtList={txtList}
        valuesList={valuesList}
        btnList={btnList}
        renderDivider={true}
      />
    );
  }
}

export default GuestBox;
