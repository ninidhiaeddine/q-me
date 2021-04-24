import React, { Component } from "react";
import MyButton from "../components/MyButton";
import MyLogo from "../components/MyLogo";
import MyNavBar from "../components/MyNavBar";
import NavLinkItem from "../components/NavLinkItem";
import "../components/my-input.css";
import "../components/my-switch.css";
import "../components/my-dropdown.css";
import {
  AlternateEmail,
  PhoneAndroid,
  Visibility,
  VisibilityOff,
  Person,
  Business,
} from "@material-ui/icons";
import { styled } from "@material-ui/styles";
import Link from "@material-ui/core/Link";
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from "@material-ui/core/IconButton";
// import { TextField } from "@material-ui/core";

import Features from "./Features";
import About from "./About";
import ContactUs from "./ContactUs";
import LogIn from "./LogIn";

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

const MyBusiness = styled(Business)({
  color: "gray",
});

class SignUp extends Component {
  // props here are: 'establishmentTypes'
  constructor(props) {
    super(props);

    this.state = {
      showButton: true,
      showForm: false,
      isEstablishment: false,
      error: "",

      guestForm: {
        name: "",
        phoneNumber: "",
      },

      establishmentForm: {
        name: "",
        type: 0,
        email: "",
        password: "",
        confirmedPassowrd: "",
        phoneNumber: "",
      },
    };
  }

  // toggle:

  toggleButton = () => {
    this.setState({ showButton: !this.state.showButton });
  };

  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // HTTP Requests:

  sendGuestSignUpRequest() {
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
    fetch("http://127.0.0.1:5000/registration/guests", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          // succeeded:
          this.props.handleSuccessfulGuestSignUp(json);
        } else {
          // failed:
          this.setState({ error: json.message });
        }
      });
  }

  sendEstablishmentSignUpRequest() {
    var data =
      this.state.establishmentForm.phoneNumber == ""
        ? {
            name: this.state.establishmentForm.name,
            type: this.state.establishmentForm.type,
            email: this.state.establishmentForm.email,
            password: this.state.establishmentForm.password,
          }
        : {
            name: this.state.establishmentForm.name,
            type: this.state.establishmentForm.type,
            email: this.state.establishmentForm.email,
            password: this.state.establishmentForm.password,
            phone_number: this.state.establishmentForm.phoneNumber,
          };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:5000/registration/establishments", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          // succeeded:
          this.props.handleSuccessfulEstablishmentSignUp(json);
        } else {
          // failed:
          this.setState({ error: json.message });
        }
      });
  }

  // Event handlers:

  handleGuestSignUp = () => {
    this.setState({ error: "" });
    this.sendGuestSignUpRequest();
  };

  handleEsablishmentSignUp = () => {
    var password = this.state.establishmentForm.password;
    var confirmedPassowrd = this.state.establishmentForm.confirmedPassowrd;

    if (password == confirmedPassowrd) {
      this.setState({ error: "" });
      this.sendEstablishmentSignUpRequest();
    } else {
      this.setState({ error: "Passwords are not matching!" });
    }
  };

  handleEstablishmentClick = () => {
    this.setState({ showForm: true, isEstablishment: true });
  };

  handleGuestClick = () => {
    this.setState({ showForm: true, isEstablishment: false });
  };

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

  handleEstablishmentNameChange = (e) => {
    var establishmentForm = this.state.establishmentForm;
    establishmentForm.name = e.target.value;
    this.setState({ establishmentForm });
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

  handleEstablishmentConfirmedPasswordChange = (e) => {
    var establishmentForm = this.state.establishmentForm;
    establishmentForm.confirmedPassowrd = e.target.value;
    this.setState({ establishmentForm });
  };

  handleEstablishmentPhoneNumberChange = (e) => {
    var establishmentForm = this.state.establishmentForm;
    establishmentForm.phoneNumber = e.target.value;
    this.setState({ establishmentForm });
  };

  handleEstablishmentEstablishmentTypeChange = (e) => {
    var establishmentForm = this.state.establishmentForm;

    // find index:
    let optionsProps = this.props.establishmentTypes;
    let targetIndex = optionsProps.indexOf(e.target.value);

    // set index:
    establishmentForm.type = targetIndex;

    // update state:
    this.setState({ establishmentForm: establishmentForm });
  };

  // Renderers:

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

  renderOptions() {
    let optionsProps = this.props.establishmentTypes;
    let optionsList = [];
    for (let index = 0; index < optionsProps.length; index++) {
      optionsList.push(
        <option value={optionsProps[index]}>{optionsProps[index]}</option>
      );
    }
    return optionsList;
  }

  // Close the dropdown if the user clicks outside of it
  renderDropDown() {
    // on click down:
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };

    // render:
    return (
      <select
        name="establishments"
        id="establishments"
        class="search_categories"
        onChange={this.handleEstablishmentEstablishmentTypeChange}
      >
        <option value="" selected>
          Establishment Type
        </option>
        {this.renderOptions()}
      </select>
    );
  }

  renderForm() {
    if (this.state.isEstablishment) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1 class="welcome">Establishment Registration</h1>
          <h2>Welcome! Sign up to get started.</h2>
          <br />
          <input
            class="secondary-input mx-2"
            type="text"
            name="name"
            id="name"
            placeholder="Name of Establishment"
            onChange={this.handleEstablishmentNameChange}
          />
          <MyBusiness />
          <br />
          <input
            class="secondary-input mx-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={this.handleEstablishmentEmailChange}
          />
          <MyAlternateEmail />
          <br />
          <input
            class="secondary-input mx-2"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            onChange={this.handleEstablishmentPasswordChange}
          />
          <MyVisibility />
          <br />
          <input
            class="secondary-input mx-2"
            type="password"
            placeholder="Confirm New Password"
            onChange={this.handleEstablishmentConfirmedPasswordChange}
          />
          <MyVisibility />
          <br />
          <input
            class="secondary-input mx-2"
            type="tel"
            placeholder="Phone Number (Optional)"
            onChange={this.handleEstablishmentPhoneNumberChange}
          />
          <MyPhone />
          <br />
          <br />
          <div>{this.renderDropDown()}</div>
          <br />
          {this.renderError()}
          <br />
          <MyButton
            class="rounded-btn primary-btn-gradient"
            value="Sign Up as an Establishment"
            onClick={this.handleEsablishmentSignUp}
            id="epost"
          ></MyButton>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h1 class="welcome">Guest Registration</h1>
          <h2>Welcome! Sign up to get started.</h2>
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
          {this.renderError()}
          <br />
          <MyButton
            class="rounded-btn primary-btn-gradient"
            value="Sign Up as a Guest"
            onClick={this.handleGuestSignUp}
          ></MyButton>
        </div>
      );
    }
  }

  renderButtons() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <MyButton
          class="rounded-btn secondary-btn-gradient"
          value="Register as Establishment"
          onClick={() => {
            this.toggleButton();
            this.handleEstablishmentClick();
          }}
        />
        <br />
        <MyButton
          class="rounded-btn secondary-btn-gradient"
          value="Register as Guest"
          onClick={() => {
            this.toggleButton();
            this.handleGuestClick();
          }}
        />
      </div>
    );
  }

  render() {
    let navLinksList = [
      new NavLinkItem(false, "Log In", "/login", { LogIn }),
      new NavLinkItem(false, "Features", "/features", { Features }),
      new NavLinkItem(false, "About", "/about", { About }),
      new NavLinkItem(false, "Contact Us", "/contactus", { ContactUs }),
    ];

    const { showButton } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <MyNavBar navLinksList={navLinksList} />
        <br />
        <br />
        <br />
        {showButton ? <MyLogo /> : null}
        {this.state.showForm == false
          ? this.renderButtons()
          : this.renderForm()}
        <br />
      </div>
    );
  }
}

export default SignUp;
