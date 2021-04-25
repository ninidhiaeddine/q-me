import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Button from "@material-ui/core/Button";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import "../components/guest.css";
import QrReader from "react-qr-reader";
import socketIOClient from "socket.io-client";
import ls from "local-storage";

// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';

class Guest extends Component {
  state = {
    showScanner: false,
    scannerResult: "",
    apiMsg: "",
    guest: {},
    queueInfo: {
      queueId: -1,
      positionInLine: -1,
      timeRemaining: -1,
      count: -1,
    },
  };

  // Helper Functions:

  pullGuestInfo() {
    //const guestId = this.props.guestId;
    const guestId = ls.get("guestId");
    this.sendGetGuestRequest(guestId);
  }

  pullUpdatedQueueInfo() {
    let currentQueueId = this.state.queueInfo.queue_id;
    let changedQueueId = this.state.apiMsg.message.queue_id;

    // only pull the updated info when the changes
    // occured within the queue this guest is in:
    if (currentQueueId == changedQueueId) {
      // retrieve the endpoint from the state:
      const endpoint = this.state.scannerResult;

      // post a request to get the updated info:
      this.sendGetInfoRequest(endpoint);
    }
  }

  // HTTP Requests:

  sendGetGuestRequest(guestId) {
    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint = REACT_APP_BACKEND_URL + "/guests/" + guestId;

    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        let guest = json.message;
        this.setState({ guest: guest });
      });
  }

  sendGetInfoRequest(guestId, endpoint) {
    const data = {
      guest_id: guestId,
    };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("https://q-me.azurewebsites.net" + endpoint, requestOptions)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data.json()));
  }

  sendAddTokenRequest(guestId, endpoint) {
    const data = {
      guest_id: guestId,
    };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("https://q-me.azurewebsites.net" + endpoint, requestOptions)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data.json()));
  }

  // Event Handlers:

  handleScanQrCodeClick = () => {
    let isShowing = this.state.showScanner;
    this.setState({ showScanner: !isShowing });
  };

  handleScan = (data) => {
    if (data) {
      this.setState({ scannerResult: data, showScanner: false });
      // post request to get queued up:
      // this.postAddTokenRequest(data)
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  socketListener() {
    // open socket connection with the server:

    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint = REACT_APP_BACKEND_URL;
    const socket = socketIOClient(endpoint);

    // listen to changes on the "dequeue" event
    socket.on("dequeue", (json) => {
      this.setState({ apiMsg: json });
    });
  }

  // component events:

  componentDidMount() {
    this.pullGuestInfo();
    this.socketListener();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.apiMsg !== prevState.apiMsg) {
      // pull updated queue info whenever api message changes:
      console.log("New api message received: " + this.setState); // for debugging
      this.pullUpdatedQueueInfo();
    }
  }

  // renderers:

  renderScanner() {
    if (this.state.showScanner) {
      return (
        <div>
          <QrReader
            delay={300}
            onScan={this.handleScan}
            onError={this.handleError}
            facingMode="environment"
          ></QrReader>
        </div>
      );
    } else return <div></div>;
  }

  renderQueueInfo() {
    let queueInfo = this.state.queueInfo;

    // only render when queue info are available
    if (queueInfo.queueId != -1) {
      return (
        <div>
          <h2>Position In Line: {queueInfo.positionInLine}</h2>
          <h2>Estimated Time Remaining: {queueInfo.timeRemaining}</h2>
          <h2>Number of People in Queue: {queueInfo.count}</h2>
        </div>
      );
    } else {
      return <h2>You are not enqueued in any queue!</h2>;
    }
  }

  render() {
    return (
      <div>
        <GNavBar handleGuestLogout={this.props.handleGuestLogout} />
        <div style={{ textAlign: "center" }}>
          <br />
          <h1 class="hi">Hi, {this.state.guest.Name}. Welcome Back!</h1>
          <br />
          <Button
            class="rounded-btn primary-btn-gradient scan-btn"
            value="Scan QR Code"
            endIcon={<CameraAltOutlinedIcon />}
            onClick={this.handleScanQrCodeClick}
          >
            Scan QR Code
          </Button>
          {this.renderScanner()}
          <br />
          <br />
          <h5 class="desc">This will open your device's camera</h5>
          <h5 class="desc">to scan the QR code</h5>
          <hr class="rounded divider"></hr>
          <br />
          <h1 class="hi">Live Tracking</h1>
          {this.renderQueueInfo()}
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default Guest;
