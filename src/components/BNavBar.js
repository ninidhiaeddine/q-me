import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./e-nav-bar.css";

import MyButton from "./MyButton";

import Home from "../pages/Home";
import Branch from "../pages/Branch";
import BProfile from "../pages/BProfile";
import BQueues from "../pages/BQueues";
import BNotifications from "../pages/BNotifications";

class GNavBar extends Component {
  render() {
    return (
      <Navbar className="my-nav-bar" variant="dark">
        <Navbar.Brand
          className="my-nav-bar"
          href="/bqueues"
          component={Branch}
        >
          <span class="home">HOME</span>
        </Navbar.Brand>
        <Nav className="mr-auto mx-7">
          <Nav.Link
            className="text-nowrap mt-2 mx-4 px-4"
            href="/bprofile"
            component={BProfile}
          >
            My Profile
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-2 mx-4 px-4"
            href="/bqueues"
            component={BQueues}
          >
            My Queues
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-2 mx-4 px-4"
            href="/bnotifications"
            component={BNotifications}
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

export default GNavBar;
