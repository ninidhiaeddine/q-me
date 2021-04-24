import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import MyButton from "../components/MyButton";
import "../components/my-input.css";
import "../components/my-button.css";
import "./css/e-branches.css";
import Popup from "../components/Popup";
import "../components/popup.css";
import "../components/my-input.css";
import Collapsible from "react-collapsible";
import CollapsibleBox from "../components/CollapsibleBox";
import Typography from "@material-ui/core/Typography";
import Box from "../components/Box";
import Button from "@material-ui/core/Button";
import QueueOutlinedIcon from "@material-ui/icons/QueueOutlined";
import Grid from "@material-ui/core/Grid";
import Branch from "../components/Branch";
import BranchBox from "../components/BranchBox";
import ls from "local-storage";

class EBranches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      isOpen: false,
      setIsOpen: false,
      branches: [],

      name: [],
      branchForm: {
        email: "",
        password: "",
        confirmedPassowrd: "",
        phoneNumber: "",
      },
    };
  }

  handleBranchSignUp = () => {
    var password = this.state.branchForm.password;
    var confirmedPassowrd = this.state.branchForm.confirmedPassowrd;

    var data =
      this.state.branchForm.phoneNumber == ""
        ? {
            name: this.state.branchForm.name,
            email: this.state.branchForm.email,
            password: password,
          }
        : {
            name: this.state.branchForm.name,
            email: this.state.branchForm.email,
            password: password,
            phone_number: this.state.branchForm.phoneNumber,
          };

    if (password == confirmedPassowrd) {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch("http://127.0.0.1:5000/branch", requestOptions)
        .then((response) => console.log(response.json()))
        .then((data) => console.log(data));
    } else {
      console.log("ERROR: Passwords are not matching!");
    }
  };

  // event handlers:

  handleBranchNameChange = (i, e) => {
    var names = this.state.name;
    names[i] = e.target.value;
    this.setState({
      name: names,
    });
  };

  handleBranchEmailChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.email = e.target.value;
    this.setState({ branchForm });
  };

  handleBranchPasswordChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.password = e.target.value;
    this.setState({ branchForm });
  };

  handleBranchConfirmedPasswordChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.confirmedPassowrd = e.target.value;
    this.setState({ branchForm });
  };

  handleBranchPhoneNumberChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.phoneNumber = e.target.value;
    this.setState({ branchForm });
  };

  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  updateMessage(event) {
    var names = this.state.name;
    names.push(event.target.value);
    this.setState({
      name: names,
    });
  }

  handleClick() {
    var branches = this.state.branches;

    // this.handleBranchSignUp();
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i] = event.target.value;

    this.setState({
      items: items,
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items,
    });
  }

  // Helper function:

  pullBranchesInfo() {
    const establishmentId = ls.get("establishmentId");
    this.sendGetBranchesRequest(establishmentId);
  }

  // HTTP Request:

  sendGetBranchesRequest(establishmentId) {
    const endpoint =
      "http://127.0.0.1:5000/establishments/" + establishmentId + "/branches";
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        let branches = json.message;
        this.setState({ branches: branches });
      });
  }

  // component related functions:

  componentDidMount() {
    this.pullBranchesInfo();
  }

  // renderers:

  renderBranchBoxes() {
    let branches = this.state.branches;
    let renderedBranches = [];
    for (let index = 0; index < branches.length; index++) {
      let branchBox = (
        <div>
          <BranchBox branch={branches[index]}></BranchBox>
          <br />
        </div>
      );
      renderedBranches.push(branchBox);
    }
    return renderedBranches;
  }

  render() {
    const { isOpen } = this.state;
    const { setIsOpen } = this.state;
    return (
      <div>
        <ENavBar
          handleEstablishmentLogout={this.props.handleEstablishmentLogout}
        />
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <MyButton
              class="rounded-btn primary-btn-gradient"
              type="button"
              value="Add Branch"
              onClick={this.togglePopup}
            />
            <br />
            <br />
          </div>
          {isOpen && (
            <Popup
              content={
                <>
                  <b>Enter Branch Information</b>
                  <br />
                  <br />
                  <input
                    class="secondary-input black-input-color mx-2 mt-3"
                    type="name"
                    placeholder="Branch Name"
                    onChange={this.updateMessage.bind(this)}
                  />
                  <br />
                  <input
                    class="secondary-input black-input-color mx-2"
                    type="email"
                    placeholder="Branch Email"
                    onChange={this.handleBranchEmailChange}
                  />
                  <br />
                  <input
                    class="secondary-input black-input-color mx-2"
                    type="tel"
                    placeholder="Phone Number"
                    onChange={this.handleBranchPhoneNumberChange}
                  />
                  <br />
                  <input
                    class="secondary-input black-input-color mx-2"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleBranchPasswordChange}
                  />
                  <MyButton
                    class="circular-btn primary-btn-inverse addBranchButton"
                    value="+"
                    onClick={this.handleClick.bind(this)}
                  />
                </>
              }
              handleClose={this.togglePopup}
            />
          )}
        </div>
        <div>
          <table className="">
            <br />
            {/* <tbody>{this.renderBranchBoxes()}</tbody> */}
          </table>
          <hr />
        </div>
      </div>
    );
  }
}
export default EBranches;
