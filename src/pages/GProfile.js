import React, { Component } from "react";
import GNavBar from "../components/GNavBar";
import Guest from "../components/Guest";
import GuestBox from "../components/GuestBox";

class GProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

      guests: [
        new Guest(
          "Ahmad Ali",
          "+3213213",
        ),
      ],

    }
  }

  renderRows() {
    let renderedGuests = [];
    for (let index = 0; index < this.state.guests.length; index++) {
      let GuestBox = (
        <div>
          <GuestBox guest={this.state.guests[index]}></GuestBox>
          <br />
        </div>
      );
      renderedGuests.push(GuestBox);
    }
    return renderedGuests;
  }

  render() {
    return (
      <div>
        <GNavBar />
        <br />
        {this.renderRows()}
      </div>
    );
  }
}
export default GProfile;
