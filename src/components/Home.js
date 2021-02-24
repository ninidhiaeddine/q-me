import React, { Component } from "react";
import MyNavBar from "./MyNavBar";
import MyButton from "./MyButton";
import MyLogo from "./MyLogo";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <br />
        <br />
        <br />
        <MyLogo />
        <br />
        <br />
        <br />
        <Link to="/login">
          <MyButton class="rounded-btn primary-btn" value="Log In" />
        </Link>
        <br />
        <Link to="/signup">
          <MyButton class="rounded-btn secondary-btn" value="Sign Up" />
        </Link>
      </div>
    );
  }
}

export default Home;
