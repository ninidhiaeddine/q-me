import React, { Component } from "react";
import Box from "./Box";

class QueueBoxBranch extends Component {
  state = {
    renderQr: false,
  };

  // Queue box click events:

  handleServeGuestClick = (e) => {
    let queueId = this.props.queue.PK_Queue;
    this.props.sendServeGuestRequest(queueId);
  };

  handleDequeueGuestClick = (e) => {
    let queueId = this.props.queue.PK_Queue;
    this.props.sendDequeueGuestRequest(queueId);
  };

  handleGenerateQrCodeClick = (e) => {
    let queueId = this.props.queue.PK_Queue;
    let branchId = this.props.queue.FK_Branch;

    this.props.sendGenerateQrCodeRequest(branchId, queueId);
  };

  handleDisplayQrCodeClick = (e) => {
    if (this.props.queue.QrCode != null) {
      this.setState({ renderQr: !this.state.renderQr });
    }
  };

  // renderer:

  render() {
    // props we have are: {queue, sendServeGuestRequest, sendDequeueGuestRequest, sendGenerateQrCodeRequest}
    let queue = this.props.queue;

    let onClickList = [
      this.handleServeGuestClick,
      this.handleDequeueGuestClick,
      this.handleGenerateQrCodeClick,
      this.handleDisplayQrCodeClick,
    ];

    let txtList = [
      "Queue Name:",
      "Approximate Time of Service:",
      "Number of Enqueuees:",
    ];
    let valuesList = [
      queue.Name,
      queue.ApproximateTimeOfService + " minutes",
      queue.NumberOfPeopleEnqueuing,
    ];
    let btnList = [
      "Serve Next Guest",
      "Dequeue Guest",
      "Generate QR Code",
      "Display QR Code",
    ];

    if (queue.QrCode != null) {
      return (
        <div>
          <Box
            title="My Queue"
            txtList={txtList}
            valuesList={valuesList}
            btnList={btnList}
            onClickList={onClickList}
            renderDivider={true}
            doRenderImage={this.state.renderQr}
            base64={queue.QrCode}
          />
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <Box
            title="My Queue"
            txtList={txtList}
            valuesList={valuesList}
            btnList={btnList}
            onClickList={onClickList}
            renderDivider={true}
          />
          <br />
        </div>
      );
    }
  }
}

export default QueueBoxBranch;
