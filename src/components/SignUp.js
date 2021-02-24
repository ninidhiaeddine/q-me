import React, { Component } from "react";
import MyButton from "./MyButton";
import MyLogo from "./MyLogo";
import Form from "react-bootstrap/Form";
import "./my-inputs.css";
import "./my-switches.css";

class SignUp extends Component {
  state = {
    showForm: false,
    isClient: false,
  };

  formatRadioButtons() {
    let result = [];
    for (var i = 0; i < this.props.typesOfEstablishments.length; i++) {
      result.push(
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Form.Check
            className="my-switch"
            type="switch"
            id={"custom-switch" + i}
            label={this.props.typesOfEstablishments[i]}
          />
        </div>
      );
    }
    return result;
  }

  formatForm() {
    if (this.state.isClient) {
      return (
        <div style={{ textAlign: "center" }}>
          <br />
          <input
            class="secondary-input"
            type="name"
            placeholder="Name of Establishment"
          />
          <br />
          <input
            class="secondary-input"
            type="email"
            placeholder="Email Address"
          />
          <br />
          <input
            class="secondary-input"
            type="password"
            placeholder="New Password"
          />
          <br />
          <input
            class="secondary-input"
            type="password"
            placeholder="Confirm New Password"
          />
          <br />
          <div
            style={{
              textAlign: "left",
              marginTop: "15px",
              marginBotton: "15px",
              marginLeft: "45%",
              marginRight: "45%",
            }}
          >
            {this.formatRadioButtons()}
          </div>
          <br />
          <MyButton
            class="rounded-btn secondary-btn"
            value="Sign Up"
          ></MyButton>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <input class="secondary-input" type="name" placeholder="Full Name" />
          <br />
          <input
            class="secondary-input"
            type="tel"
            placeholder="Phone Number"
          />
          <br />
          <br />
          <MyButton
            class="rounded-btn secondary-btn"
            value="Sign Up"
          ></MyButton>
        </div>
      );
    }
  }

  formatButtons() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <MyButton
          class="rounded-btn secondary-btn"
          value="Sign Up as Client"
          onClick={this.handleClientClick}
        />
        <br />
        <MyButton
          class="rounded-btn secondary-btn"
          value="Sign Up as Guest"
          onClick={this.handleGuestClick}
        />
      </div>
    );
  }

  handleClientClick = () => {
    this.setState({ showForm: true, isClient: true });
  };

  handleGuestClick = () => {
    this.setState({ showForm: true, isClient: false });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <MyLogo />
        {this.state.showForm == false
          ? this.formatButtons()
          : this.formatForm()}
      </div>
    );
  }
}

export default SignUp;
