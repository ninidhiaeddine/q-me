import React, { Component } from "react";
import "./MyHeaders.css";

class MyLogo extends Component {
  render() {
    return (
      <div>
        <a class="logo" href="http://localhost:3000/"><h1><span class="primaryColor">Q</span><span class="secondaryColor">Me!</span></h1></a>
        <h2>Online Queue Maker</h2>
      </div>
    );
  }
}

export default MyLogo;
