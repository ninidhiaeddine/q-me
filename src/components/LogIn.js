import React, { Component } from "react";
import MyButton from "./MyButton";
import "./my-inputs.css";
import MyLogo from "./MyLogo";

class LogIn extends Component {
  state = {
    showForm: false,
    isClient: false,
  };

  formatForm() {
    if (this.state.isClient) {
      return (
        <div style={{ textAlign: "center" }}>
          <input
            class="secondary-input"
            type="email"
            placeholder="Email Address"
          />
          <br />
          <input
            class="secondary-input"
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <MyButton
            class="rounded-btn secondary-btn"
            value="Sign In"
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
            value="Sign In"
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
          value="Log In as Client"
          onClick={this.handleClientClick}
        />
        <br />
        <MyButton
          class="rounded-btn primary-btn"
          value="Log In as Guest"
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
