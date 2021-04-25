import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import MyButton from "../components/MyButton";
import "../components/my-input.css";
import "../components/my-button.css";
import "./css/e-branches.css";
import Popup from "../components/Popup";
import "../components/popup.css";
import "../components/my-input.css";
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
      error: "",

      branchForm: {
        address: "",
        email: "",
        password: "",
        confirmedPassword: "",
        phoneNumber: "",
      },
    };
  }

  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // event handlers:

  handleBranchAddressChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.address = e.target.value;
    this.setState({ branchForm: branchForm });
  };

  handleBranchEmailChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.email = e.target.value;
    this.setState({ branchForm: branchForm });
  };

  handleBranchPasswordChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.password = e.target.value;
    this.setState({ branchForm: branchForm });
  };

  handleBranchConfirmedPasswordChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.confirmedPassword = e.target.value;
    this.setState({ branchForm: branchForm });
  };

  handleBranchPhoneNumberChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.phoneNumber = e.target.value;
    this.setState({ branchForm: branchForm });
  };

  handleAddBranchClick = () => {
    const establishmentId = ls.get("establishmentId");
    this.sendAddBranchRequest(establishmentId);
  };

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

  sendAddBranchRequest(establishmentId) {
    let password = this.state.branchForm.password;
    let confirmedPassword = this.state.branchForm.confirmedPassword;

    if (password == confirmedPassword) {
      let data =
        this.state.branchForm.phoneNumber == ""
          ? {
              address: this.state.branchForm.address,
              email: this.state.branchForm.email,
              password: password,
            }
          : {
              address: this.state.branchForm.address,
              email: this.state.branchForm.email,
              password: password,
              phone_number: this.state.branchForm.phoneNumber,
            };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const endpoint =
        "http://127.0.0.1:5000/establishments/" + establishmentId + "/branches";
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          if (json.status != 200) {
            this.setState({ error: json.message });
          } else {
            this.togglePopup();
            this.pullBranchesInfo();
          }
        });
    } else {
      this.setState({ error: "Passwords are not matching!" });
    }
  }

  // component related functions:

  componentDidMount() {
    this.pullBranchesInfo();
  }

  // renderers:

  renderBranchBoxes() {
    let branches = this.state.branches;

    if (typeof branches != "string" && branches.length > 0) {
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
    } else {
      <h1 style={{ textAlign: "center" }}>
        You have not created any Branch yet!
      </h1>;
    }
  }

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
                    class="secondary-input black-input-color mx-2"
                    type="text"
                    placeholder="Address"
                    onChange={this.handleBranchAddressChange}
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
                    type="password"
                    placeholder="Password"
                    onChange={this.handleBranchPasswordChange}
                  />
                  <input
                    class="secondary-input black-input-color mx-2"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={this.handleBranchConfirmedPasswordChange}
                  />
                  <br />
                  <input
                    class="secondary-input black-input-color mx-2"
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    onChange={this.handleBranchPhoneNumberChange}
                  />
                  {this.renderError()}
                  <MyButton
                    class="circular-btn primary-btn-inverse addBranchButton"
                    value="+"
                    onClick={this.handleAddBranchClick}
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
            <tbody>{this.renderBranchBoxes()}</tbody>
          </table>
          <hr />
        </div>
      </div>
    );
  }
}
export default EBranches;
