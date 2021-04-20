import React, { Component } from "react";
import MyNavBar from "../components/MyNavBar";
import NavLinkItem from "../components/NavLinkItem";
import MyLogo from "../components/MyLogo";
import "./about.css";

import Features from "./Features";
import ContactUs from "./ContactUs";
import LogIn from "./LogIn";

class About extends Component {
  state = {};
  render() {
    let navLinksList = [
      new NavLinkItem(false, "Log In", "/login", { LogIn }),
      new NavLinkItem(false, "Features", "/features", { Features }),
      new NavLinkItem(true, "About", "/about", { About }),
      new NavLinkItem(false, "Contact Us", "/contactus", { ContactUs }),
    ];

    return (
      <div>
        <MyNavBar navLinksList={navLinksList} />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <MyLogo />
        </div>
        <br />
        <br />

        <h3 class="team-members">Team Members:</h3>
        <h3 class="technologies">Technologies:</h3>
        <br />
        <br />
        <ul class="team-members">
          <li>Dhia Eddine Nini</li>
          <li>Mahdi Al Khatib</li>
          <li>Rafik Amrani</li>
          <li>Sara Narimene Boukais</li>
        </ul>
        <ul class="technologies">
          <li>Frontend: React.js</li>
          <li>Backend: Flask</li>
          <li>Cloud: Azure</li>
        </ul>
      </div>
    );
  }
}
export default About;
