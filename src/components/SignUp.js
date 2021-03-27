import React, { Component } from "react";
import MyButton from "./MyButton";
import MyLogo from "./MyLogo";
import Form from "react-bootstrap/Form";
import MyNavBar from "./MyNavBar";
import "./my-inputs.css";
import "./my-switches.css";
import "./my-dropdown.css";
import $ from 'jquery';


class SignUp extends Component {




  state = {
    showForm: false,
    isHost: false,
  };

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

  hostPost() {
    var settings = {
      "url": "q-me.azurewebsites.net/establishments",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json",
        "Cookie": "ARRAffinity=bffb580df78d7165f60f8296e74f37e8d5a5ef15cfd49e51bf0d3e3f75c7c66d"
      },
      "data": JSON.stringify({
        "name": "classic",
        "type": 0,
        "email": "classic@hotmail.com",
        "password": "classic123"
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  // Close the dropdown if the user clicks outside of it
  formatDropDown() {
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  formatForm() {

    if (this.state.isHost) {
      return (
        <div style={{ textAlign: "center" }}>
          <br />
          <input
            class="secondary-input"
            type="text"
            name="name"
            id="name"
            placeholder="Name of Establishment"
          />
          <br />
          <input
            class="secondary-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <br />
          <input
            class="secondary-input"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
          />
          <br />
          {/* <input
            class="secondary-input"
            type="password"
            placeholder="Confirm New Password"
          /> */}

          <br />
          <div>
            <label class="etype" for="establishments">Establishment Type:</label>

            <select name="establishments" id="establishments" class="search_categories">
              <option value="Restaurant">Restaurant</option>
              <option value="Hotel">Hotel</option>
              <option value="Bank">Bank</option>
              <option value="Supermarket">Supermarket</option>
            </select>
          </div>
          <br />
          <MyButton
            class="rounded-btn secondary-btn"
            value="Sign Up"
            onClick={SignUp.hostPost}
            id="epost"
          ></MyButton>
        </div>
      );
    }
    
    else {
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
            class="rounded-btn primary-btn"
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
          class="rounded-btn secondary-btn-gradient"
          value="Sign Up as Host"
          onClick={this.handleHostClick}
        />
        <br />
        <MyButton
          class="rounded-btn secondary-btn-gradient"
          value="Sign Up as Guest"
          onClick={this.handleGuestClick}
        />
      </div>
    );
  }

  
  handleHostClick = () => {
    this.setState({ showForm: true, isHost: true });
  };

  handleGuestClick = () => {
    this.setState({ showForm: true, isHost: false });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <MyNavBar />
        <br />
        <br />
        <br />
        <MyLogo />
        {this.state.showForm == false
          ? this.formatButtons()
          : this.formatForm()}
        <br />
      </div>
    );
  }
}

export default SignUp;