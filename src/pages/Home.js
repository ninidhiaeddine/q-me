import React, { Component } from "react";
import MyNavBar from "../components/MyNavBar";
import MyButton from "../components/MyButton";
import MyLogo from "../components/MyLogo";
import home from "./images/home.jpg";
import "./css/home.css";
import { Link } from "react-router-dom";
import NavLinkItem from "../components/NavLinkItem";

import Features from "./Features";
import About from "./About";
import ContactUs from "./ContactUs";
import LogIn from "./LogIn";

class Home extends Component {
  render() {
    let navLinksList = [
      new NavLinkItem(false, "Log In", "/login", { LogIn }),
      new NavLinkItem(false, "Features", "/features", { Features }),
      new NavLinkItem(false, "About", "/about", { About }),
      new NavLinkItem(false, "Contact Us", "/contactus", { ContactUs }),
    ];

    return (
      <div className="App">
        <MyNavBar navLinksList={navLinksList} />
        <br />
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
            <MyButton class="rounded-btn primary-btn-gradient" value="Log In" />
          </Link>
          <br />
          <Link to="/signup">
            <MyButton
              class="rounded-btn primary-btn-gradient"
              value="Sign Up"
            />
          </Link>
        </div>
        <img class="photo border-gradient border-gradient-purple" src={home} />
      </div>
    );
    // function Header() {
    //   // Import result is the URL of your image
    //   return <img src={FrontImage} alt="Logo" />;
    // }
  }
}

export default Home;
