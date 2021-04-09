import React, { Component } from "react";
import MyNavBar from "../components/MyNavBar";
import MyButton from "../components/MyButton";
import MyLogo from "../components/MyLogo";
import queue from "./queue.png";
import "./home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <br />
        <Link to="/establishment">Establishment</Link>
        <br />
        <br />
        <div class="absolute">
          {/* <MyLogo /> */}
          <h1>Online Queue Maker</h1>
          <h2>
            No need to wait in <br></br>line anymore!
          </h2>
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
        <img
          class=" photo border-gradient border-gradient-purple"
          src={queue}
        />
      </div>
    );
    // function Header() {
    //   // Import result is the URL of your image
    //   return <img src={FrontImage} alt="Logo" />;
    // }
  }
}

export default Home;
