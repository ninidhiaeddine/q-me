import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./e-nav-bar.css";

import MyButton from "./MyButton";

import Home from "../pages/Home";
import Establishment from "../pages/Establishment";
import Profile from "../pages/Profile";
import Branches from "../pages/Branches";
import Notifications from "./Notifications";

class ENavBar extends Component {
  render() {
    return (
      <Navbar className="my-nav-bar" variant="dark">
        <Navbar.Brand
          className="my-nav-bar"
          href="/establishment"
          component={Establishment}
        >
          E_Name
        </Navbar.Brand>
        <Nav className="mr-auto mx-7">
          <Nav.Link
            className="text-nowrap mt-4 mx-4 px-4"
            href="/profile"
            component={Profile}
          >
            My Profile
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-4 mx-4 px-4"
            href="/branches"
            component={Branches}
          >
            My Branches
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-4 mx-4 px-4"
            href="/notifications"
            component={Notifications}
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
