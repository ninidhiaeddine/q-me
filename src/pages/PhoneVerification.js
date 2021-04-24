import React, { Component } from "react";
import "../components/my-input.css";
import { styled } from "@material-ui/styles";
import { PhoneAndroid } from "@material-ui/icons";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import Button from "@material-ui/core/Button";

const MyPhone = styled(PhoneAndroid)({
  color: "gray",
});

class PhoneVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
      error: "",
    };
  }

  // http requests:

  sendOtpCheckRequest() {
    var data = {
      guest_id: this.props.guestId,
      otp: this.state.otp,
    };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:5000/otp/check", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          // succeeded:
          this.props.handleSuccessfulOtpCheck(json);
        } else {
          // failed:
          this.setState({ error: json.message });
        }
      });
  }

  // DOM event handlers:

  handleOtpChange = (e) => {
    this.setState({ otp: e.value });
  };

  handleVerifyClick = () => {
    this.setState({ error: "" });
    this.sendOtpCheckRequest();
  };

  // renderers:

  renderError() {
    if (this.state.error != "") {
      return (
        <div>
          <br />
          <p className="error">{this.state.error}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <br />
        <h3 class="mt-5" style={{ color: "var(--primary-color)" }}>
          Number verification
        </h3>
        <br />
        <h4 style={{ color: "aliceblue" }}>
          {" "}
          We have sent a confirmation code to your Phone Number
        </h4>
        <h4 style={{ color: "aliceblue" }}>
          {" "}
          Please enter the Code you have received.
        </h4>
        <br />
        <br />
        <input
          class="secondary-input mx-2"
          placeholder="Confirmation Code"
          maxlength="4"
          onChange={this.handleOtpChange}
        />
        <MyPhone />
        <br />
        {this.renderError()}
        <br />
        <Button
          class="rounded-btn primary-btn-gradient scan-btn mt-3"
          value="Verify"
          endIcon={<CheckOutlinedIcon />}
          onClick={this.handleVerifyClick}
        >
          Verify
        </Button>
      </div>
    );
  }
}
export default PhoneVerification;
