import React, { Component } from "react";
import MyNavBar from "../components/MyNavBar";
import contactus from "./images/contact-us.jpg";
import "./css/contact-us.css";
import "../components/my-input.css";
import NavLinkItem from "../components/NavLinkItem";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import Features from "./Features";
import About from "./About";
import LogIn from "./LogIn";

class ContactUs extends Component {
  state = {};
  render() {
    let navLinksList = [
      new NavLinkItem(false, "Log In", "/login", { LogIn }),
      new NavLinkItem(false, "Features", "/features", { Features }),
      new NavLinkItem(false, "About", "/about", { About }),
      new NavLinkItem(true, "Contact Us", "/contactus", { ContactUs }),
    ];

    return (
      <div>
        <MyNavBar navLinksList={navLinksList} />
        <div style={{ textAlign: "center" }}>
          <h1 class="get-in-touch">Get in touch with us!</h1>
        </div>
        <br />
        <div class="inputs-absolute">
          <input
            class="secondary-input mb-3"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.handleEstablishmentNameChange}
          />
          <br />
          <input
            class="secondary-input mb-3"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={this.handleEstablishmentEmailChange}
          />
          <br />
          <input
            class="secondary-input mb-3"
            type="tel"
            placeholder="Phone Number (Optional)"
            onChange={this.handleEstablishmentPhoneNumberChange}
          />
          <br />
          <input
            class="secondary-input mb-3"
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            onChange={this.handleEstablishmentPhoneNumberChange}
          />
          <br />
          <Button
            variant="contained"
            className="sendBtn"
            endIcon={<SendIcon></SendIcon>}
          >
            Send Message
          </Button>
        </div>
        <img
          class="contact-us-photo border-gradient border-gradient-purple"
          src={contactus}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default ContactUs;
