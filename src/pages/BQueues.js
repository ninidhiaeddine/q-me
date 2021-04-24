import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
import Box from "../components/Box";
import QueueBoxBranch from "../components/QueueBoxBranch";
import Button from "@material-ui/core/Button";
// import { SvgIcon } from "@material-ui/core";
// import { ReactComponent as Logo } from "../components/qr_code_scanner_white_24dp.svg";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


class BQueues extends Component {
  state = {
    queues: [1],
  };

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
          <QueueBoxBranch
            queueName="N/A"
            establishmentName="N/A"
            status="N/A"
            NumberofEnqueuees="N/A"
          ></QueueBoxBranch>
        );
      }
      return queueBoxes;
    }
  }

  render() {
    return (
      <div style={{
        textAlign: "center"
      }}>
        <BNavBar></BNavBar>
        {this.renderQueues()}

        <Button
          class="rounded-btn primary-btn-gradient scan-btn"
          value="Generate QR Code"
          endIcon={<AddBoxOutlinedIcon />}
          style={{ minWidth: "25%" }}
        // onClick={this.handleScanQrCodeClick}
        >
          Generate QR Code
          </Button>
        <br/>
        <Button
          class="rounded-btn primary-btn-gradient scan-btn"
          value="Display Queue"
          endIcon={<OpenInNewIcon />}
          style={{ minWidth: "25%" }}
        // onClick={this.handleScanQrCodeClick}
        >
          Display Queue
          </Button>
      </div>
    );
  }
}
export default BQueues;
