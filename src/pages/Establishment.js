import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import ls from "local-storage";

class Establishment extends Component {
  state = {
    establishment: {},
  };

  // Helper function:

  pullEstablishmentInfo() {
    const establishmentId = ls.get("establishmentId");
    this.sendGetEstablishmentRequest(establishmentId);
  }

  // HTTP Request:

  sendGetEstablishmentRequest(establishmentId) {
    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint =
      REACT_APP_BACKEND_URL + "/establishments/" + establishmentId;

    fetch(endpoint)
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

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <ENavBar
          handleEstablishmentLogout={this.props.handleEstablishmentLogout}
        />
        <br />
        <h1 class="hi">Hi! Welcome Back!</h1>
        <h1 class="hi">Establishment's Name:</h1>
        <h1 class="name">{this.state.establishment.Name}</h1>
      </div>
    );
  }
}
export default Establishment;
