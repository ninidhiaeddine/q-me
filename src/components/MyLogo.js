import React, { Component } from "react";
import "./my-header.css";
import { Link } from "react-router-dom";

class MyLogo extends Component {
  render() {
    return (
      <Link to="/">
        <h1 class="logo">QMe!</h1>
        <h2 class="logo">Online Queue Maker</h2>
      </Link>
    );
  }
}

export default MyLogo;
