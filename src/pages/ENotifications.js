import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import NotificationBox from "../components/NotificationBox";

class ENotifications extends Component {
  state = {
    BranchID: "15",
  };
  render() {
    let branchID = this.state.BranchID;
    let txtList = ["Branch with ID: " + branchID + " has been added successfully"];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <ENavBar />
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
export default ENotifications;
