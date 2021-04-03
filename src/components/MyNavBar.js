import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-nav-bar.css";

import MyButton from "./MyButton";

import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Features from "./Features";
import About from "./About";
import ContactUs from "./ContactUs";

class MyNavBar extends Component {
  render() {
    return (
      <Navbar className="my-nav-bar" variant="dark">
        <Navbar.Brand className="my-nav-bar pt-2" href="/" component={Home}>
          <span class="QMe brand">QMe!</span>
        </Navbar.Brand>
        <Nav className="mr-auto ml-7">
          <Nav.Link className="text-nowrap mt-2 mx-4 ml-5" activeClassName="is-active" href="/login" component={LogIn}>
            Log In
          </Nav.Link>
          <Nav.Link className="text-nowrap mt-2 mx-4" href="/features" component={Features}>
            Features
          </Nav.Link>
          <Nav.Link className="text-nowrap mt-2 mx-4" href="/about" component={About}>
            About
          </Nav.Link>
          <Nav.Link className="text-nowrap mt-2 mx-4" href="/contactus" component={ContactUs}>
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav.Link className="my-nav-bar right my-2" href="/signup" component={SignUp}>
            <MyButton class="thin-rounded-btn primary-btn" value="Get Started" />
        </Nav.Link>
      </Navbar>
    );
  }
}

export default MyNavBar;
