import React, { Component } from "react";
import MyNavBar from "../components/MyNavBar";
import MyLogo from "../components/MyLogo";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <MyNavBar />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <MyLogo />
        </div>
        <br />
        <br />

        <h3 class="team-members">Team Members:</h3>
        <h3 class="technologies">Technologies:</h3>
        <br />
        <br />
        <ul class="team-members">
          <li>Dhia Eddine Nini</li>
          <li>Mahdi Al Khatib</li>
          <li>Rafik Amrani</li>
          <li>Sara Narimene Boukais</li>
        </ul>
        <ul class="technologies">
          <li>Frontend: React.js</li>
          <li>Backend: Flask</li>
          <li>Cloud: Azure</li>
        </ul>
      </div>
    );
  }
}
export default About;
