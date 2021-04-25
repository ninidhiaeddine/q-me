import React, { Component } from "react";
import Box from "./Box";

class QueueBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let txtList = [
      "Queue Name:",
      "Approximate Time of Service:",
      "Status:",
      "Number of enqueuees:",
    ];
    let valuesList = [
      this.props.queue.Name,
      this.props.queue.ApproximateTimeOfService,
      "HARDCODED FOR NOW",
      "HARDCODED FOR NOW",
    ];
    let btnList = [
      "Next Guest",
      "Close Queue",
      "Generate QR Code",
      "Display QR Code",
    ];

    return (
      <div>
        <Box
          title="Your Queue"
          txtList={txtList}
          valuesList={valuesList}
          btnList={btnList}
          renderDivider={true}
        />
        <br />
      </div>
    );
  }
}

export default QueueBox;
