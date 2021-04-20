import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-nav-bar.css";
import NavLinkItem from "./NavLinkItem";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

import MyButton from "./MyButton";

class MyNavBar extends Component {
  constructor(props) {
    super(props);
  }

  renderNavLinks(navLinksList) {
    let renderedNavLinks = [];
    for (let index = 0; index < navLinksList.length; index++) {
      let navLink = navLinksList[index];
      if (navLink.isActive) {
        renderedNavLinks.push(
          <Nav.Link
            className="text-nowrap mt-2 mx-4 ml-5 active"
            activeClassName="is-active"
            href={navLink.href}
            component={navLink.component}
          >
            {navLink.text}
          </Nav.Link>
        );
      } else {
        renderedNavLinks.push(
          <Nav.Link
            className="text-nowrap mt-2 mx-4 ml-5"
            activeClassName="is-active"
            href={navLink.href}
            component={navLink.component}
          >
            {navLink.text}
          </Nav.Link>
        );
      }
    }
    return renderedNavLinks;
  }

  render() {
    return (
      <Navbar className="my-nav-bar" variant="dark">
        <Navbar.Brand className="my-nav-bar pt-2" href="/" component={Home}>
          <span class="QMe brand">QMe!</span>
        </Navbar.Brand>
        <Nav className="mr-auto ml-7">
          {this.renderNavLinks(this.props.navLinksList)}
          {/* <Nav.Link
            className="text-nowrap mt-2 mx-4"
            href="/features"
            component={Features}
          >
            Features
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-2 mx-4"
            href="/about"
            component={About}
          >
            About
          </Nav.Link>
          <Nav.Link
            className="text-nowrap mt-2 mx-4"
            href="/contactus"
            component={ContactUs}
          >
            Contact Us
          </Nav.Link>*/}
        </Nav>
        <Nav.Link
          className="my-nav-bar right my-2"
          href="/signup"
          component={SignUp}
        >
          <MyButton class="thin-rounded-btn primary-btn" value="Get Started" />
        </Nav.Link>
      </Navbar>
    );
  }
}

export default MyNavBar;
