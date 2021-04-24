import React, { Component } from "react";
import Box from "./Box";

class QueueBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let txtList = [
      "Queue Name:",
      "Establishment Name:",
      "Status:",
      "Number of enqueuees:",
    ];
    let valuesList = [
      this.props.queueName,
      this.props.establishmentName,
      this.props.status,
      this.props.NumberofEnqueuees,
    ];
    let btnList = ["Next Guest", "Close Queue"];

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
