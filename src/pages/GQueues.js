import React, { Component } from "react";
import QueueBox from "../components/QueueBox";
import GNavBar from "../components/GNavBar";

class GQueues extends Component {
  state = {
    queues: [],
  };

  // renderers:

  renderQueues() {
    if (this.state.queues.length == 0) {
      return (
        <h1 style={{ textAlign: "center" }}>
          You are not enqueued in any queue!
        </h1>
      );
    } else {
      let queueBoxes = [];
      for (let index = 0; index < this.state.queues.length; index++) {
        queueBoxes.push(
          <QueueBox
            establishmentName="N/A"
            branchName="N/A"
            status="N/A"
            positionInLine="N/A"
          ></QueueBox>
        );
      }
      return queueBoxes;
    }
  }

  render() {
    return (
      <div>
        <GNavBar handleGuestLogout={this.props.handleGuestLogout}></GNavBar>
        <br />
        {this.renderQueues()}
      </div>
    );
  }
}
export default GQueues;
