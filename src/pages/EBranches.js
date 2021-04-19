import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import MyButton from "../components/MyButton";
import "../components/my-input.css";
import "./e-branches.css";
import Popup from '../components/Popup';
import "../components/popup.css";
import "../components/my-input.css";
import Collapsible from 'react-collapsible';
import CollapsibleBox from '../components/CollapsibleBox';
import Typography from '@material-ui/core/Typography';

class EBranches extends Component {

  state = {};
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [],
      isOpen: false,
      setIsOpen: false,

      branchForm: {
        name: "",
        email: "",
        password: "",
        confirmedPassowrd: "",
        phoneNumber: ""
      }

    };

  }

  handlebranchSignUp = () => {
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

  handlebranchNameChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.name = e.target.value;
    this.setState({ branchForm });
  };

  handlebranchEmailChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.email = e.target.value;
    this.setState({ branchForm });
  };

  handlebranchPasswordChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.password = e.target.value;
    this.setState({ branchForm });
  };

  handlebranchConfirmedPasswordChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.confirmedPassowrd = e.target.value;
    this.setState({ branchForm });
  };

  handlebranchPhoneNumberChange = (e) => {
    var branchForm = this.state.branchForm;
    branchForm.phoneNumber = e.target.value;
    this.setState({ branchForm });
  };

  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: "",
    });
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

  renderRows() {
    var context = this;

    return this.state.items.map(function (o, i) {
      return (
        <tr key={"item-" + i}>
          <td>
            <CollapsibleBox
              name= {context.state.branchForm.name}
              email= {context.state.branchForm.email}
              password= {context.state.branchForm.password}
              phone= {context.state.branchForm.phoneNumber}
              type="text"
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>

          <td>
            <MyButton
              class="text-nowrap small-rounded-btn primary-btn pr-7"
              value="Delete Branch"
              onClick={context.handleItemDeleted.bind(context, i)}
            ></MyButton>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { isOpen } = this.state;
    const { setIsOpen } = this.state;
    return (
      <div>
        <ENavBar />
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
          {isOpen && <Popup
            content={<>
              <b>Enter Branch Information</b>
              <br />
              <br />
              <input
                class="secondary-input black-input-color mx-2 mt-3"
                type="name"
                placeholder="Branch Name"
                onChange={this.handlebranchNameChange}
              />
              <br />
              <input
                class="secondary-input black-input-color mx-2"
                type="email"
                placeholder="Branch Email"
                onChange={this.handlebranchEmailChange}
              />
              <br />
              <input
                class="secondary-input black-input-color mx-2"
                type="tel"
                placeholder="Phone Number"
                onChange={this.handlebranchPhoneNumberChange}
              />
              <br />
              <input
                class="secondary-input black-input-color mx-2"
                type="password"
                placeholder="Password"
                onChange={this.handlebranchPasswordChange}
              />
              <MyButton
                class="circular-btn primary-btn-inverse addBranchButton"
                value="+"
                onClick={this.handleClick.bind(this)}
              />
            </>}
            handleClose={this.togglePopup}
          />}
        </div>
        <div>
          <table className="">
            <br />
            <tbody>{this.renderRows()}</tbody>
          </table>
          <hr />
        </div>

      </div>
    );
  }
}
export default EBranches;
