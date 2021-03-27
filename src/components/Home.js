import React, { Component } from "react";
import MyNavBar from "./MyNavBar";
import MyButton from "./MyButton";
import MyLogo from "./MyLogo";
import FrontImage from "./what-is-queue-management.png";
import "./my-home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <br />
        <Link to="/establishment">
          Establishment
        </Link>
        <br />
        <br />
        <div class="absolute">
          {/* <MyLogo /> */}
          <h1>Online Queue Maker</h1>
          <h2>No need to wait in <br></br>line anymore!</h2>
          <br />
          <br />
          <Link to="/login">
            <MyButton class="rounded-btn primary-btn-inverse" value="Log In" />
          </Link>
          <br />
          <Link to="/signup">
            <MyButton class="rounded-btn primary-btn" value="Sign Up" />
          </Link>
        </div>
      </div>
    );
    // function Header() {
    //   // Import result is the URL of your image
    //   return <img src={FrontImage} alt="Logo" />;
    // }
  }
  
}

export default Home;
