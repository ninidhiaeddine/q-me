import React, { Component } from "react";
import MyButton from "./MyButton";
import MyLogo from "./MyLogo";
import MyNavBar from "./MyNavBar";
import "./my-inputs.css";
import "./my-switches.css";
import "./my-dropdown.css";
import { AlternateEmail, PhoneAndroid, Visibility, VisibilityOff, Person, Business } from "@material-ui/icons";
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

const MyBusiness = styled(Business)({
  color: "gray"
});

class SignUp extends Component {

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
        name: "",
        type: 0,
        email: "",
        password: "",
        confirmedPassowrd: "",
        phoneNumber: "",
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
  //     name: "",
  //     type: 0,
  //     email: "",
  //     password: "",
  //     confirmedPassowrd: "",
  //     phoneNumber: "",
  //   },
  // };

  // formatRadioButtons() {
  //   let result = [];
  //   for (var i = 0; i < this.props.typesOfEstablishments.length; i++) {
  //     result.push(
  //       <div style={{ marginTop: "10px", marginBottom: "10px" }}>
  //         <Form.Check
  //           className="my-switch"
  //           type="switch"
  //           id={"custom-switch" + i}
  //           label={this.props.typesOfEstablishments[i]}
  //         />
  //       </div>
  //     );
  //   }
  //   return result;
  // }

  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  handleEsablishmentSignUp = () => {
    var password = this.state.establishmentForm.password;
    var confirmedPassowrd = this.state.establishmentForm.confirmedPassowrd;

    var data =
      this.state.establishmentForm.phoneNumber == ""
        ? {
          name: this.state.establishmentForm.name,
          type: this.state.establishmentForm.type,
          email: this.state.establishmentForm.email,
          password: password,
        }
        : {
          name: this.state.establishmentForm.name,
          type: this.state.establishmentForm.type,
          email: this.state.establishmentForm.email,
          password: password,
          phone_number: this.state.establishmentForm.phoneNumber,
        };

    if (password == confirmedPassowrd) {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch("http://127.0.0.1:5000/establishments", requestOptions)
        .then((response) => console.log(response.json()))
        .then((data) => console.log(data));
    } else {
      console.log("ERROR: Passwords are not matching!");
    }
  };

  handleGuestSignUp = () => {
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
    fetch("http://127.0.0.1:5000/guests", requestOptions)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  };

  // Close the dropdown if the user clicks outside of it
  formatDropDown() {
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
    switch (e.target.value) {
      // TODO: Remove hardcoding from this part:
      case "Restaurant":
        establishmentForm.type = 0;
        break;

      case "Hotel":
        establishmentForm.type = 1;
        break;

      case "Bank":
        establishmentForm.type = 2;
        break;

      case "Supermarket":
        establishmentForm.type = 3;
        break;
    }
    this.setState({ establishmentForm });
  };

  formatForm() {
    if (this.state.isEstablishment) {
      return (
        <div style={{ textAlign: "center" }}>
          <p class="welcome" >Host Registration</p>
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
          <div>
            <select
              name="establishments"
              id="establishments"
              class="search_categories"
              onChange={this.handleEstablishmentEstablishmentTypeChange}
            >
              <option value="" selected>
                Establishment Type
              </option>
              <option value="Restaurant">Restaurant</option>
              <option value="Hotel">Hotel</option>
              <option value="Bank">Bank</option>
              <option value="Supermarket">Supermarket</option>
            </select>
          </div>
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
          <p class="welcome" >Guest Registration</p>
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

  formatButtons() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <MyButton
          class="rounded-btn secondary-btn-gradient"
          value="Register as Establishment"
          onClick={() => { this.toggleButton(); this.handleEstablishmentClick(); }}
        />
        <br />
        <MyButton
          class="rounded-btn secondary-btn-gradient"
          value="Register as Guest"
          onClick={() => { this.toggleButton(); this.handleGuestClick(); }}
        />
      </div>
    );
  }

  handleEstablishmentClick = () => {
    this.setState({ showForm: true, isEstablishment: true });
  };

  handleGuestClick = () => {
    this.setState({ showForm: true, isEstablishment: false });
  };

  render() {
    const { showButton } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <MyNavBar />
        <br />
        <br />
        <br />
        {showButton ? <MyLogo /> : null}
        {this.state.showForm == false
          ? this.formatButtons()
          : this.formatForm()}
        <br />
      </div>
    );
  }
}

export default SignUp;
