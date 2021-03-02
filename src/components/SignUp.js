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
    guestFullName: "",
    guestPhoneNumber: "",
  };

  handleNameChange = (event) => {
    this.setState({ guestFullName: event.target.value });
  };

  handlePhoneNumberChange = (event) => {
    this.setState({ guestPhoneNumber: event.target.value });
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
          <input
            class="secondary-input"
            type="name"
            placeholder="Full Name"
            onChange={this.handleNameChange}
          />
          <br />
          <input
            class="secondary-input"
            type="tel"
            placeholder="Phone Number"
            onChange={this.handlePhoneNumberChange}
          />
          <br />
          <br />
          <MyButton
            class="rounded-btn secondary-btn"
            value="Sign Up"
            onClick={this.handleGuestSignUp}
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

  handleGuestSignUp = () => {
    // create POST request with Guest JSON:
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.guestFullName,
        phoneNumber: this.state.guestPhoneNumber,
      }),
    };

    // send request to sign up:
    fetch("http://127.0.0.1:5000/auth/register_guest", requestOptions);
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
