import React, { Component } from "react";
import Box from "./Box";

class BranchBox extends Component {
  handleEditClick = () => {};

  render() {
    // props we have are: {branch}

    let branch = this.props.branch;

    // variable declarations:
    let txtList = [
      "Address:",
      "Phone Number:",
      "Email:",
      "Password:",
      "Latitude:",
      "Longitude:",
    ];
    let valuesList = [
      branch.Address,
      branch.PhoneNumber,
      branch.Email,
      "******",
      branch.Latitude,
      branch.Longitude,
    ];
    let btnList = ["Edit Branch Information"];
    let onClickList = [this.handleEditClick];

    // return the branch box after rendering:
    return (
      <Box
        title="Branch"
        txtList={txtList}
        valuesList={valuesList}
        btnList={btnList}
        onClickList={onClickList}
        renderDivider={true}
      />
    );
  }
}

export default BranchBox;
