import React, { Component } from "react";
import MyButton from "./MyButton";
import "./my-inputs.css";
import MyLogo from "./MyLogo";
import MyNavBar from "./MyNavBar";
import { AlternateEmail, PhoneAndroid, Visibility, VisibilityOff, Person } from "@material-ui/icons";
import { styled } from '@material-ui/styles';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from "@material-ui/core/IconButton";
// import { TextField } from "@material-ui/core";


const MyVisibility = styled(VisibilityOff)({
  color: "gray"
});

const MyAlternateEmail = styled(AlternateEmail)({
  color: "gray"
});

const MyPhone = styled(PhoneAndroid)({
  color: "gray"
});

const MyPerson = styled(Person)({
  color: "gray"
});

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
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
  }

  toggleButton = () => {
    this.setState({ showButton: !this.state.showButton });
  };

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

  formatForm() {
    if (this.state.isEstablishment) {
      return (
        <div style={{ textAlign: "center" }}>
          <p class="welcome" >Host Login</p>
          <h2>Welcome back! You've been missed!</h2>
          <br/>
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
          <p class="welcome" >Guest Login</p>
          <h2>Welcome back! You've been missed!</h2>
          <br/>
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
    return (
      <div style={{ textAlign: "center" }}>
        <MyButton
          class="rounded-btn primary-btn"
          value="Log In as Establishment"
          onClick={() => { this.toggleButton(); this.handleEstablishmentClick(); }}
        />
        <br />
        <MyButton
          class="rounded-btn primary-btn"
          value="Log In as Guest"
          onClick={() => { this.toggleButton(); this.handleGuestClick(); }}
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
    const { showButton} = this.state;
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
