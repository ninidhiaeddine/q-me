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
      positionInLine: -1,
      timeRemaining: -1,
      count: -1,
    },
    beingServed: false,
    dequeued: false,
  };

  // Helper Functions:

  pullGuestInfo() {
    const guestId = ls.get("guestId");

    if (guestId != -1) {
      this.sendGetGuestRequest(guestId);
    }
  }

  pullQueueInfo() {
    const guestId = ls.get("guestId");
    const queueId = ls.get("queueId");

    if (guestId != -1 && queueId != -1) {
      this.sendGetInfoRequest(guestId, queueId);
    }
  }

  pullUpdatedQueueInfo() {
    let currentQueueId = ls.get("queueId");
    let changedQueueId = this.state.apiMsg.message.queue_id;

    // only pull the updated info when the changes
    // occured within the queue this guest is in:
    if (currentQueueId == changedQueueId) {
      // send a request to get the updated info:
      const guestId = ls.get("guestId");
      this.sendGetInfoRequest(guestId, currentQueueId);
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

  sendGetInfoRequest(guestId, queueId) {
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

    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint =
      REACT_APP_BACKEND_URL +
      "/establishments/" +
      0 +
      "/branches/" +
      0 +
      "/queues/" +
      queueId +
      "/tokens/info";

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        // get queue info from state:
        let queueInfo = this.state.queueInfo;

        // set new values obtained from API:
        queueInfo.positionInLine = json.message.pos_in_line;
        queueInfo.timeRemaining = json.message.time_remaining;
        queueInfo.count = json.message.number_of_people_enqueuing;

        // update state:
        this.setState({ queueInfo: queueInfo });
      });
  }

  sendAddTokenRequest(guestId, endpointToAddToken) {
    let data = {
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

    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint = REACT_APP_BACKEND_URL + endpointToAddToken;

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          // store queueId in Local Storage:
          ls.set("queueId", json.message.queue_id);

          // pull queue info:
          this.pullQueueInfo();
        } else {
          alert(json.message);
        }
      });
  }

  // Event Handlers:

  handleScanQrCodeClick = () => {
    let isShowing = this.state.showScanner;
    this.setState({ showScanner: !isShowing });
  };

  handleScan = (data) => {
    if (data) {
      // ('data' is the endpoint that the guest must send the request to)
      this.setState({ scannerResult: data, showScanner: false });

      // send request to get queued up:
      const guestId = ls.get("guestId");
      this.sendAddTokenRequest(guestId, data);
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
    socket.on("serve", (json) => {
      this.setState({ apiMsg: json });

      // check if this specific guest is being served:
      let servedGuestId = json.message.guest_id;
      let currentGuestId = ls.get("guestId");

      if (servedGuestId == currentGuestId) {
        this.setState({ beingServed: true, dequeued: false });
      }
    });

    // listen to changes on the "dequeue" event
    socket.on("dequeue", (json) => {
      this.setState({ apiMsg: json });

      // check if this specific guest has been dequeued:
      let dequeuedGuestId = json.message.guest_id;
      let currentGuestId = ls.get("guestId");

      if (dequeuedGuestId == currentGuestId) {
        this.setState({ beingServed: false, dequeued: true });
      }
    });
  }

  // component events:

  componentDidMount() {
    // pull info upon startup:
    this.pullGuestInfo();
    this.pullQueueInfo();

    // socket listener:
    this.socketListener();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.apiMsg != prevState.apiMsg) {
      // pull updated queue info whenever api message changes:
      console.log("New api message received: " + this.state.apiMsg); // for debugging
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
    let queueId = ls.get("queueId");

    // only render when queue info are available
    if (this.state.beingServed) {
      return <h2>You are being Served right now!</h2>;
    } else if (this.state.dequeued) {
      return <h2>You have been Served and Dequeued. Thank you!</h2>;
    } else if (queueId && queueId != -1) {
      let queueInfo = this.state.queueInfo;
      return (
        <div>
          <h2>Position In Line: {queueInfo.positionInLine}</h2>
          <h2>
            Estimated Time Remaining: {queueInfo.timeRemaining} minutes...
          </h2>
          <h2>Number of People in Queue: ({queueInfo.count})</h2>
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
