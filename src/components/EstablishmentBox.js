import React, { Component } from "react";
import Box from "./Box";

class EstablishmentBox extends Component {
  formatType(typeIndex) {
    // expects an integer type parameter

    let establishmentTypes = this.props.establishmentTypes;
    return establishmentTypes[typeIndex];
  }

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
      "Password:",
    ];
    let valuesList = [
      establishment.PK_Establishment,
      establishment.Name,
      this.formatType(establishment.Type),
      establishment.PhoneNumber,
      establishment.Email,
      "**********",
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
