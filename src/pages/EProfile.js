import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import EstablishmentBox from "../components/EstablishmentBox";
import Establishment from "../components/Establishment";

class EProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      establishment: new Establishment(
        "12",
        "Bank Audi",
        "2, Bank",
        "+3213213",
        "Audi_123@Audi.lb",
        "********"
      ),
    };
  }

  renderEstablishment() {
    return (
      <EstablishmentBox
        establishment={this.state.establishment}
      ></EstablishmentBox>
    );
  }

  render() {
    return (
      <div>
        <ENavBar />

        <br />
        {this.renderEstablishment()}
      </div>
    );
  }
}
export default EProfile;
