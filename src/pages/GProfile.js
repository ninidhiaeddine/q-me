import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Guest from "../components/Guest";
import GuestBox from "../components/GuestBox";
import ls from "local-storage";

class GProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guest: {},
    };
  }

  // Helper Functions:

  pullGuestInfo() {
    //const guestId = this.props.guestId;
    const guestId = ls.get("guestId");
    this.sendGetGuestRequest(guestId);
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

  // component events:

  componentDidMount() {
    this.pullGuestInfo();
  }

  // renderers:

  renderGuest() {
    return <GuestBox guest={this.state.guest}></GuestBox>;
  }

  render() {
    return (
      <div>
        <GNavBar handleGuestLogout={this.props.handleGuestLogout} />
        <br />
        {this.renderGuest()}
      </div>
    );
  }
}
export default GProfile;
