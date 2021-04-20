import React, { Component } from "react";
import MyNavBar from "../components/MyNavBar";
import NavLinkItem from "../components/NavLinkItem";

import About from "./About";
import ContactUs from "./ContactUs";
import LogIn from "./LogIn";

class Features extends Component {
  state = {};
  render() {
    let navLinksList = [
      new NavLinkItem(false, "Log In", "/login", { LogIn }),
      new NavLinkItem(true, "Features", "/features", { Features }),
      new NavLinkItem(false, "About", "/about", { About }),
      new NavLinkItem(false, "Contact Us", "/contactus", { ContactUs }),
    ];

    return (
      <div style={{ textAlign: "center" }}>
        <MyNavBar navLinksList={navLinksList} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Q</p>
      </div>
    );
  }
}

export default Features;
