import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
import NotificationBox from "../components/NotificationBox";

class BNotifications extends Component {
  state = {
    QueueID: "163",
  };
  render() {
    let queueID = this.state.QueueID;
    let txtList = ["Queue with ID: " + queueID + " is now open"];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <BNavBar />
          <h1>Guest Notifications</h1>
          <br />
        </div>
        <div>
          <NotificationBox txtList={txtList} buttonText="Change Information" />
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
export default BNotifications;