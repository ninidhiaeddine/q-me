import React, { Component } from "react";
import MyButton from "../components/MyButton";
import MyLogo from "../components/MyLogo";
import MyNavBar from "../components/MyNavBar";
import NavLinkItem from "../components/NavLinkItem";

import Features from "./Features";
import About from "./About";
import ContactUs from "./ContactUs";

import "../components/my-input.css";
import "./css/login.css";

import {
  AlternateEmail,
  PhoneAndroid,
  Visibility,
  VisibilityOff,
  Person,
} from "@material-ui/icons";
import { styled } from "@material-ui/styles";
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from "@material-ui/core/IconButton";
// import { TextField } from "@material-ui/core";

const MyVisibility = styled(VisibilityOff)({
  color: "gray",
});

const MyAlternateEmail = styled(AlternateEmail)({
  color: "gray",
});

const MyPhone = styled(PhoneAndroid)({
  color: "gray",
});

const MyPerson = styled(Person)({
  color: "gray",
});

function ButtonsList(props) {
  const buttons = props.buttons;
  const listItems = buttons.map((button) => (
    <li key={button.id}>
      <div style={{ textAlign: "center" }}>
        {button}
        <br />
      </div>
    </li>
  ));
  return <ul style={{ paddingLeft: 0 }}>{listItems}</ul>;
}

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      showForm: false,
      isEstablishment: false,
      isBranch: false,
      error: "",

      guestForm: {
        name: "",
        phoneNumber: "",
      },

      establishmentForm: {
        email: "",
        password: "",
      },

      branchForm: {
        email: "",
        password: "",
      },
    };
  }

  toggleButton = () => {
    this.setState({ showButton: !this.state.showButton });
  };

  // helper functions:

  // HTTP Requests:

  sendGuestLoginRequest() {
    var data = {
      name: this.state.guestForm.name,
      phone_number: this.state.guestForm.phoneNumber,
    };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint = REACT_APP_BACKEND_URL + "/auth/guests";

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          // succeeded:
          this.props.handleSuccessfulGuestLogin(json);
        } else {
          // failed:
          this.setState({ error: json.message });
        }
      });
  }

  sendEstablishmentLoginRequest() {
    var data = {
      email: this.state.establishmentForm.email,
      password: this.state.establishmentForm.password,
    };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint = REACT_APP_BACKEND_URL + "/auth/establishments";

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          // succeeded:
          this.props.handleSuccessfulEstablishmentLogin(json);
        } else {
          // failed:
          this.setState({ error: json.message });
        }
      });
  }

  sendBranchLoginRequest() {
    var data = {
      email: this.state.branchForm.email,
      password: this.state.branchForm.password,
    };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint = REACT_APP_BACKEND_URL + "/auth/branches";

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          // succeeded:
          this.props.handleSuccessfulBranchLogin(json);
        } else {
          // failed:
          this.setState({ error: json.message });
        }
      });
  }

  // event handlers:

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

  handleBranchEmailChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.email = e.target.value;
    this.setState({ branchForm });
  };

  handleBranchPasswordChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.password = e.target.value;
    this.setState({ branchForm });
  };

  // click events:

  handleGuestSignIn = () => {
    this.setState({ error: "" });
    this.sendGuestLoginRequest();
  };

  handleEstablishmentSignIn = () => {
    this.setState({ error: "" });
    this.sendEstablishmentLoginRequest();
  };

  handleBranchSignIn = () => {
    this.setState({ error: "" });
    this.sendBranchLoginRequest();
  };

  handleEstablishmentClick = () => {
    this.setState({ showForm: true, isEstablishment: true, isBranch: false });
  };

  handleGuestClick = () => {
    this.setState({ showForm: true, isEstablishment: false, isBranch: false });
  };

  handleBranchClick = () => {
    this.setState({ showForm: true, isEstablishment: false, isBranch: true });
  };

  // renderers:

  renderError() {
    if (this.state.error != "") {
      return (
        <div>
          <br />
          <p className="error">{this.state.error}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderForm() {
    if (this.state.isEstablishment) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1 className="welcome">Establishment Login</h1>
          <h2>Welcome back! You've been missed!</h2>
          <br />
          <input
            class="secondary-input mx-2"
            type="email"
            placeholder="Email Address"
            onChange={this.handleEstablishmentEmailChange}
          />
          <MyAlternateEmail />
          <br />
          <input
            class="secondary-input mx-2"
            type="password"
            placeholder="Password"
            onChange={this.handleEstablishmentPasswordChange}
          />
          <MyVisibility />
          {this.renderError()}
          <br />
          <MyButton
            class="circular-btn primary-btn-gradient"
            value="→"
            onClick={this.handleEstablishmentSignIn}
          ></MyButton>
        </div>
      );
    } else if (this.state.isBranch) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1 className="welcome">Branch Login</h1>
          <h2>Welcome back! You've been missed!</h2>
          <br />
          <input
            class="secondary-input mx-2"
            type="email"
            placeholder="Email Address"
            onChange={this.handleBranchEmailChange}
          />
          <MyAlternateEmail />
          <br />
          <input
            class="secondary-input mx-2"
            type="password"
            placeholder="Password"
            onChange={this.handleBranchPasswordChange}
          />
          <MyVisibility />
          {this.renderError()}
          <br />
          <MyButton
            class="circular-btn primary-btn-gradient"
            value="→"
            onClick={this.handleBranchSignIn}
          ></MyButton>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h1 class="welcome">Guest Login</h1>
          <h2>Welcome back! You've been missed!</h2>
          <br />
          <input
            class="secondary-input mx-2"
            type="name"
            placeholder="Full Name"
            onChange={this.handleGuestNameChange}
          />
          <MyPerson />
          <br />
          <input
            class="secondary-input mx-2"
            type="tel"
            placeholder="Phone Number"
            onChange={this.handleGuestPhoneNumberChange}
          />
          <MyPhone />
          {this.renderError()}
          <br />
          <MyButton
            class="circular-btn primary-btn-gradient"
            value="→"
            onClick={this.handleGuestSignIn}
          ></MyButton>
        </div>
      );
    }
  }

  renderButtons() {
    var buttons = [
      <MyButton
        class="rounded-btn primary-btn"
        value="Log In as Establishment"
        onClick={() => {
          this.toggleButton();
          this.handleEstablishmentClick();
        }}
      />,
      <MyButton
        class="rounded-btn primary-btn"
        value="Log In as Branch"
        onClick={() => {
          this.toggleButton();
          this.handleBranchClick();
        }}
      />,
      <MyButton
        class="rounded-btn primary-btn"
        value="Log In as Guest"
        onClick={() => {
          this.toggleButton();
          this.handleGuestClick();
        }}
      />,
    ];
    return <ButtonsList buttons={buttons} />;
  }

  render() {
    const { showButton } = this.state;
    let navLinksList = [
      new NavLinkItem(true, "Log In", "/login", { LogIn }),
      new NavLinkItem(false, "Features", "/features", { Features }),
      new NavLinkItem(false, "About", "/about", { About }),
      new NavLinkItem(false, "Contact Us", "/contactus", { ContactUs }),
    ];

    return (
      <div style={{ textAlign: "center" }}>
        <MyNavBar navLinksList={navLinksList} />
        <br />
        <br />
        {showButton ? <MyLogo /> : null}
        <br />
        {this.state.showForm == false
          ? this.renderButtons()
          : this.renderForm()}
      </div>
    );
  }
}

export default LogIn;
