import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
import Box from "../components/Box";
import QueueBoxBranch from "../components/QueueBoxBranch";
import Button from "@material-ui/core/Button";
// import { SvgIcon } from "@material-ui/core";
// import { ReactComponent as Logo } from "../components/qr_code_scanner_white_24dp.svg";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ls from "local-storage";
import Queue from "../components/Queue";
import Popup from "../components/Popup";
import MyButton from "../components/MyButton";

class BQueues extends Component {
  state = {
    queues: [],
    queueForm: { name: "", time: "" },
    error: "",
    isOpen: false,
  };

  // Helper function:

  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  pullQueuesInfo() {
    const branchId = ls.get("branchId");
    this.sendGetQueuesRequest(branchId);
  }

  // HTTP Requests:

  sendGetQueuesRequest(branchId) {
    const endpoint =
      "http://127.0.0.1:5000/establishments/" +
      0 +
      "/branches/" +
      branchId +
      "/queues";

    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          let queues = json.message;
          this.setState({ queues: queues });
        }
      });
  }

  sendAddQueueRequest(branchId) {
    let data = {
      name: this.state.queueForm.name,
      approximate_time_of_service: parseFloat(this.state.queueForm.time),
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const endpoint =
      "http://127.0.0.1:5000/establishments/" +
      0 +
      "/branches/" +
      branchId +
      "/queues";

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status != 200) {
          this.setState({ error: json.message });
        } else {
          this.togglePopup();
          this.pullQueuesInfo();
        }
      });
  }

  // component related functions:

  componentDidMount() {
    this.pullQueuesInfo();
  }

  // event handlers:

  handleQueueNameChange = (e) => {
    let queueForm = this.state.queueForm;
    queueForm.name = e.target.value;
    this.setState({ queueForm: queueForm });
  };

  handleQueueTimeChange = (e) => {
    let queueForm = this.state.queueForm;
    queueForm.time = e.target.value;
    this.setState({ queueForm: queueForm });
  };

  handleAddQueueClick = () => {
    let branchId = ls.get("branchId");
    this.sendAddQueueRequest(branchId);
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

  renderPopup() {
    let isOpen = this.state.isOpen;
    if (isOpen) {
      return (
        <Popup
          content={
            <>
              <b>Enter Branch Information</b>
              <br />
              <br />
              <input
                class="secondary-input black-input-color mx-2"
                type="text"
                placeholder="Name of Queue"
                onChange={this.handleQueueNameChange}
              />
              <br />
              <input
                class="secondary-input black-input-color mx-2"
                type="email"
                placeholder="Approximate Time of Service"
                onChange={this.handleQueueTimeChange}
              />
              {this.renderError()}
              <MyButton
                class="circular-btn primary-btn-inverse addBranchButton"
                value="+"
                onClick={this.handleAddQueueClick}
              />
            </>
          }
          handleClose={this.togglePopup}
        />
      );
    } else {
      return <div></div>;
    }
  }

  renderQueues() {
    let queues = this.state.queues;

    if (typeof queues != "string" && queues.length > 0) {
      let renderedQueues = [];
      for (let index = 0; index < queues.length; index++) {
        let queueBox = (
          <div>
            <QueueBoxBranch queue={queues[index]}></QueueBoxBranch>
            <br />
          </div>
        );
        renderedQueues.push(queueBox);
      }
      return renderedQueues;
    } else {
      return (
        <h1 style={{ textAlign: "center" }}>
          You have not created any Queue yet!
        </h1>
      );
    }
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <BNavBar handleBranchLogout={this.props.handleBranchLogout}></BNavBar>
        <MyButton
          class="rounded-btn primary-btn-gradient"
          type="button"
          value="Add Queue"
          onClick={this.togglePopup}
        />
        <br />
        <br />
        {this.renderPopup()}
        {this.renderQueues()}
      </div>
    );
  }
}
export default BQueues;
