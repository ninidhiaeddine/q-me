import React, { Component } from "react";
import Box from "./Box";

class QueueBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let txtList = [
      "Establishment's Name:",
      "Branch's Name:",
      "Status:",
      "Position In Line:",
    ];
    let valuesList = [
      this.props.establishmentName,
      this.props.branchName,
      this.props.status,
      this.props.positionInLine,
    ];
    let btnList = ["Postpone Turn", "Leave Live"];

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
