import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./e-nav-bar.css";

import MyButton from "./MyButton";

import Home from "../pages/Home";
import Establishment from "../pages/Establishment";
import EProfile from "../pages/EProfile";
import EBranches from "../pages/EBranches";
import ENotifications from "../pages/ENotifications";

class ENavBar extends Component {
  render() {
    return (
      <Navbar className="my-nav-bar" variant="dark">
        <Navbar.Brand
          className="my-nav-bar"
          href="/ebranches"
          component={Establishment}
        >
          <span class="home">Home</span>
        </Navbar.Brand>
        <Nav className="mr-auto mx-7">
          <Nav.Link
            className="text-nowrap mt-2 mx-4 px-4"
            href="/eprofile"
            component={EProfile}
          >
            My Profile
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-2 mx-4 px-4"
            href="/ebranches"
            component={EBranches}
          >
            My Branches
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-2 mx-4 px-4"
            href="/enotifications"
            component={ENotifications}
          >
            My Notifications
          </Nav.Link>
        </Nav>
        <Nav.Link className="right my-2" href="/" component={Home}>
          <MyButton class="thin-rounded-btn primary-btn" value="Sign Out" />
        </Nav.Link>
      </Navbar>
    );
  }
}

export default ENavBar;
