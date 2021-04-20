import React, { Component } from "react";
import Box from "./Box";

class BranchBox extends Component {
  render() {
    // props we have are: {branch}
    // variable declarations:
    let branch = this.props.branch;
    let txtList = [
      "Address:",
      "Phone Number:",
      "Email:",
      "Password:",
      "Latitude:",
      "Longitude:",
    ];
    let valuesList = [
      branch.address,
      branch.phoneNumber,
      branch.email,
      "******",
      branch.latitude,
      branch.longitude,
    ];
    let btnList = ["Delete Branch"];

    // return the branch box after rendering:
    return (
      <Box
        title="Branch"
        txtList={txtList}
        valuesList={valuesList}
        btnList={btnList}
        renderDivider={true}
      />
    );
  }
}

export default BranchBox;
