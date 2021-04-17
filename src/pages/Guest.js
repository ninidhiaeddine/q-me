import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import MyButton from "../components/MyButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { Icon } from "@material-ui/core";
import "../components/guest.css"
import QrReader from 'react-qr-reader'
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';

class Guest extends Component {
  state = {
    showScanner : false,
    result : 'No result'
  };

  postRequest(endpoint) {
    var data = {
      guest_id: 0 /* <-- wrong id. guest id comes here */
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
      .then((data) => console.log(data));
  }

  handleScanQrCodeClick = () => {
    var isShowing = this.state.showScanner;
    this.setState({ showScanner: !isShowing });
  }

  handleScan = (data) => {
    if (data) {
      this.setState({ result: data })

      // post request to get queued up:
      // this.postRequest(data)
    }
  }

  handleError = (err) => {
    console.error(err)
  }

  renderScaner() {
    if (this.state.showScanner) {
      return (<div>
        <QrReader
          delay={300}
          onScan={this.handleScan}
          onError={this.handleError}
          facingMode="user"
        >
        </QrReader>
      </div>);
    }
    else
      return <div></div>;
  }

  render() {
    return (
      <div>
        <GNavBar />

        <div style={{ textAlign: "center" }}>
          <br />
          <h1 class="hi">Hi, Guest. Welcome Back!</h1>
          <br />
          <Button
            class="rounded-btn primary-btn-gradient scan-btn"
            value="Scan QR Code"
            endIcon={<CameraAltOutlinedIcon />}
            onClick={this.handleScanQrCodeClick}>
            Scan QR Code
        </Button>
          {this.renderScaner()}
          <br />
          <br />
          <h5 class="desc">This will open your device's camera</h5>
          <h5 class="desc">to scan the QR code</h5>
          <hr class="rounded divider"></hr>
          <br />
          <h1 class="hi">Live Tracking</h1>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default Guest;
