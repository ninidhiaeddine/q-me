import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import EstablishmentBox from "../components/EstablishmentBox";
import ls from "local-storage";

class EProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      establishment: {},
    };
  }

  // Helper function:

  pullEstablishmentInfo() {
    const establishmentId = ls.get("establishmentId");
    this.sendGetEstablishmentRequest(establishmentId);
  }

  // HTTP Request:

  sendGetEstablishmentRequest(establishmentId) {
    fetch("http://127.0.0.1:5000/establishments/" + establishmentId)
      .then((response) => response.json())
      .then((json) => {
        let establishment = json.message;
        this.setState({ establishment: establishment });
      });
  }

  // component related functions:

  componentDidMount() {
    this.pullEstablishmentInfo();
  }

  // renderers:

  renderEstablishment() {
    return (
      <EstablishmentBox
        establishmentTypes={this.props.establishmentTypes}
        establishment={this.state.establishment}
      ></EstablishmentBox>
    );
  }

  render() {
    return (
      <div>
        <ENavBar
          handleEstablishmentLogout={this.props.handleEstablishmentLogout}
        />

        <br />
        {this.renderEstablishment()}
      </div>
    );
  }
}
export default EProfile;
