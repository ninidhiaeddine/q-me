import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import NotificationBox from "../components/NotificationBox";

class GNotifications extends Component {
  state = {};

  render() {
    let txtList = ["Your position in line is:", "Estimated time remaining:"];
    let myLink = " Go to \"My Queues\" for Live Tracking... ";
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <GNavBar />
          <h1>Guest Notifications</h1>
          <br />
        </div>
        <div>
          <NotificationBox txtList={txtList} myLink={myLink} buttonText="Change Information" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default GNotifications;
