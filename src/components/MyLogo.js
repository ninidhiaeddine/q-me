import React, { Component } from "react";
import "./MyHeaders.css";

class MyLogo extends Component {
  render() {
    return (
      <div>
        <a class="logo" href="http://localhost:3000/"><p><span class="primaryColor">Q</span><span class="secondaryColor">Me!</span></p></a>
        <h2 class ="logo">Online Queue Maker</h2>
      </div>
    );
  }
}

export default MyLogo;
