import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
import NotificationBoxBranch from "../components/NotificationBoxBranch";

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
      let valuesList = ["5", "6"];
      for (let index = 0; index < 2; index++) {
        notifBoxes.push(
          <div>
            <NotificationBoxBranch valuesList={valuesList}></NotificationBoxBranch>
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
        <BNavBar></BNavBar>
        <h1 style={{ textAlign: "center" }}>Branch Notifications</h1>
        {this.renderNotifications()}
      </div>
    );
  }
}
export default GNotifications;
