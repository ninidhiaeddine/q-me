import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import MyButton from "../components/MyButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { Icon } from "@material-ui/core";
import "../components/guest.css"
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';

class Guest extends Component {
  state = {};
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
            endIcon={<CameraAltOutlinedIcon />}>
            Scan QR Code
        </Button>
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
