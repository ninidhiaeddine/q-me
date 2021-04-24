import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import EstablishmentBox from "../components/EstablishmentBox";
import Establishment from "../components/Establishment";

class EProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

      establishments: [
        new Establishment(
          "12",
          "Bank Audi",
          "2, Bank",
          "+3213213",
          "Audi_123@Audi.lb",
          "********"
        ),
      ],
    }
  }

  renderRows() {
    let renderedEstablishments = [];
    for (let index = 0; index < this.state.establishments.length; index++) {
      let establishmentBox = (
        <div>
          <EstablishmentBox establishment={this.state.establishments[index]}></EstablishmentBox>
          <br />
        </div>
      );
      renderedEstablishments.push(establishmentBox);
    }
    return renderedEstablishments;
  }

  render() {
    return (
      <div>
        <ENavBar />

        <br />
        {this.renderRows()}
      </div>
    );
  }
}
export default EProfile;
