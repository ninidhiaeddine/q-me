import React, { Component } from "react";
import Box from "./Box";

class EstablishmentBox extends Component {
  render() {
    // props we have are: {establishment}
    // variable declarations:
    let establishment = this.props.establishment;
    let txtList = [
      "Establishment ID:",
      "Establishment Name:",
      "Type:",
      "Phone Number:",
      "Email:",
      "password:",
    ];
    let valuesList = [
      establishment.id,
      establishment.name,
      establishment.type,
      establishment.phoneNumber,
      establishment.email,
      establishment.password,
    ];
    let btnList = ["Edit Information"];

    // return the branch box after rendering:
    return (
      <Box
        title="Establishment"
        txtList={txtList}
        valuesList={valuesList}
        btnList={btnList}
        renderDivider={true}
      />
    );
  }
}

export default EstablishmentBox;
