import React, { Component } from "react";
import "../components/my-input.css";
import { styled } from "@material-ui/styles";
import { PhoneAndroid } from "@material-ui/icons";
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import Button from "@material-ui/core/Button";

const MyPhone = styled(PhoneAndroid)({
  color: "gray",
});

class PhoneVerification extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:""
    };
  }

  handlePhoneNumberChange = (e) => {
    var phoneNumber = this.state;
    phoneNumber = e.target.value;
    this.setState({ phoneNumber: phoneNumber });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <br />
        <h3 class="mt-5"style={{color: 'var(--primary-color)'}}>Number verification</h3>
        <br />
        <h4 style={{color: "aliceblue"}}> We have sent a confirmation code to the phone number</h4>
        <h4 style={{color: "aliceblue"}}> Please verify the sent code below</h4>
        <br />
        <br />
        <input
          class="secondary-input mx-2"
          placeholder="Confirmation Code"
          maxlength="4"
          // onChange={this.handleGuestNameChange}
        />
        <MyPhone/>
        <br />
        <Button
            class="rounded-btn primary-btn-gradient scan-btn mt-3"
            value="Scan QR Code"
            endIcon={< CheckOutlinedIcon />}
            // onClick={this.handleScanQrCodeClick}
          >
            Verify
          </Button>
      </div>
    );
  }
}
export default PhoneVerification;
