import React, { Component } from "react";
import MyButton from "../components/MyButton";
import MyLogo from "../components/MyLogo";
import MyNavBar from "../components/MyNavBar";

import "../components/my-input.css";

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
  return <ul>{listItems}</ul>;
}

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      showForm: false,
      isEstablishment: false,
      isBranch: false,

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


  // state = {
  //   showForm: false,
  //   isEstablishment: false,

  //   guestForm: {
  //     name: "",
  //     phoneNumber: "",
  //   },

  //   establishmentForm: {
  //     email: "",
  //     password: "",
  //   },
  // };

  toggleButton = () => {
    this.setState({ showButton: !this.state.showButton });
  };

  formatForm() {
    if (this.state.isEstablishment) {
      return (
        <div style={{ textAlign: "center" }}>
          <p class="welcome">Host Login</p>
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
          <br />
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
          <p class="welcome">Branch Login</p>
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
          <br />
          <br />
          <MyButton
            class="circular-btn primary-btn-gradient"
            value="→"
            onClick={this.handleEstablishmentSignIn}
          ></MyButton>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <p class="welcome">Guest Login</p>
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
          <br />
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

  formatButtons() {
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

  handleBranchClick = () => {
    this.setState({ showForm: true, isBranch: true });
  };

  render() {
    const { showButton } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <MyNavBar />
        <br />
        <br />
        {showButton ? <MyLogo /> : null}
        <br />
        {this.state.showForm == false
          ? this.formatButtons()
          : this.formatForm()}
      </div>
    );
  }
}

export default LogIn;
