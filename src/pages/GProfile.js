import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Guest from "../components/Guest";
import GuestBox from "../components/GuestBox";

class GProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guest: {},
    };
  }

  // Helper Functions:

  pullGuestInfo() {
    const guestId = this.props.guestId;
    this.sendGetGuestRequest(guestId);
  }

  // HTTP Requests:

  sendGetGuestRequest(guestId) {
    fetch("http://127.0.0.1:5000/guests/" + guestId)
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
        <GNavBar />
        <br />
        {this.renderGuest()}
      </div>
    );
  }
}
export default GProfile;
