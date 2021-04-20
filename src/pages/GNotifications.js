import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import NotificationBox from "../components/NotificationBox";

class GNotifications extends Component {
  state = {
    notifs: [],
  };

  renderNotifications() {
    //if (this.state.notifs.length == 0) {
    if (false) {
      return (
        <h1 style={{ textAlign: "center" }}>You have no notifications!</h1>
      );
    } else {
      let notifBoxes = [];
      let valuesList = ["N/A", "N/A"];
      for (let index = 0; index < 2; index++) {
        notifBoxes.push(
          <div>
            <NotificationBox valuesList={valuesList}></NotificationBox>
            <br />
          </div>
        );
      }
      return notifBoxes;
    }
  }

  render() {
    return (
      <div>
        <GNavBar></GNavBar>
        <h1 style={{ textAlign: "center" }}>Guest Notifications</h1>
        {this.renderNotifications()}
      </div>
    );
  }
}
export default GNotifications;
