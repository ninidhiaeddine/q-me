import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-nav-bar.css";

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
        
        <Navbar.Brand href="/" component={Home}>
          <span class="Q">Q</span><span class="Me">Me!</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login" component={LogIn}>
            Log In
          </Nav.Link>
          <Nav.Link href="/signup" component={SignUp}>
            Sign Up
          </Nav.Link>
          <Nav.Link href="/features" component={Features}>
            Features
          </Nav.Link>
          <Nav.Link href="/about" component={About}>
            About
          </Nav.Link>
          <Nav.Link href="/contactus" component={ContactUs}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default MyNavBar;
