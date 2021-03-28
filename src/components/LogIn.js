import React, { Component } from "react";
import MyButton from "./MyButton";
import "./my-inputs.css";
import MyLogo from "./MyLogo";
import MyNavBar from "./MyNavBar";

class LogIn extends Component {
  state = {
    showForm: false,
    isEstablishment: false,

    guestForm: {
      name: "",
      phoneNumber: "",
    },

    establishmentForm: {
      email: "",
      password: "",
    },
  };

  formatForm() {
    if (this.state.isEstablishment) {
      return (
        <div style={{ textAlign: "center" }}>
          <input
            class="secondary-input"
            type="email"
            placeholder="Email Address"
            onChange={this.handleEstablishmentEmailChange}
          />
          <br />
          <input
            class="secondary-input"
            type="password"
            placeholder="Password"
            onChange={this.handleEstablishmentPasswordChange}
          />
          <br />
          <br />
          <MyButton
            class="rounded-btn primary-btn"
            value="Sign In as Establishment"
            onClick={this.handleEstablishmentSignIn}
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
            onChange={this.handleGuestNameChange}
          />
          <br />
          <input
            class="secondary-input"
            type="tel"
            placeholder="Phone Number"
            onChange={this.handleGuestPhoneNumberChange}
          />
          <br />
          <br />
          <MyButton
            class="rounded-btn secondary-btn"
            value="Sign In as Guest"
            onClick={this.handleGuestSignIn}
          ></MyButton>
        </div>
      );
    }
  }

  formatButtons() {
    return (
      <div style={{ textAlign: "center" }}>
        <MyButton
          class="rounded-btn primary-btn"
          value="Log In as Establishment"
          onClick={this.handleEstablishmentClick}
        />
        <br />
        <MyButton
          class="rounded-btn secondary-btn"
          value="Log In as Guest"
          onClick={this.handleGuestClick}
        />
      </div>
    );
  }

  handleGuestNameChange = (e) => {
    var guestForm = this.state.guestForm;
    guestForm.name = e.target.value;
    this.setState({ guestForm });
  };

  handleGuestPhoneNumberChange = (e) => {
    var guestForm = this.state.guestForm;
    guestForm.phoneNumber = e.target.value;
    this.setState({ guestForm });
  };

  handleEstablishmentEmailChange = (e) => {
    var establishmentForm = this.state.establishmentForm;
    establishmentForm.email = e.target.value;
    this.setState({ establishmentForm });
  };

  handleEstablishmentPasswordChange = (e) => {
    var establishmentForm = this.state.establishmentForm;
    establishmentForm.password = e.target.value;
    this.setState({ establishmentForm });
  };

  handleGuestSignIn = () => {
    var data = {
      name: this.state.guestForm.name,
      phone_number: this.state.guestForm.phoneNumber,
    };
    console.log(JSON.stringify(data));
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:5000/auth/guests", requestOptions)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  };

  handleEstablishmentSignIn = () => {
    var data = {
      email: this.state.establishmentForm.email,
      password: this.state.establishmentForm.password,
    };
    console.log(JSON.stringify(data));

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:5000/auth/establishments", requestOptions)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  };

  handleEstablishmentClick = () => {
    this.setState({ showForm: true, isEstablishment: true });
  };

  handleGuestClick = () => {
    this.setState({ showForm: true, isEstablishment: false });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <MyNavBar />
        <br />
        <br />
        <MyLogo />
        <br />
        <br />
        <br />
        {this.state.showForm == false
          ? this.formatButtons()
          : this.formatForm()}
      </div>
    );
  }
}

export default LogIn;
