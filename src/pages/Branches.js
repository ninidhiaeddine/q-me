import React, { Component } from "react";
import ENavBar from "../components/ENavBar";
import MyButton from "../components/MyButton";
import "../components/my-input.css";
import "./branches.css";

class Branches extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [],
    };
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
            <input
              class="secondary-input"
              type="text"
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>

          <td>
            <MyButton
              class="text-nowrap small-rounded-btn secondary-btn pr-7"
              value="Delete Branch"
              onClick={context.handleItemDeleted.bind(context, i)}
            ></MyButton>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <ENavBar />
        <br />
        <div>
          <table className="">
            <thead>
              <tr>
                <th>Item</th>
                <th>Actions</th>
              </tr>
            </thead>
            <br />
            <tbody>{this.renderRows()}</tbody>
          </table>
          <hr />
          <input
            class="secondary-input"
            type="text"
            value={this.state.message}
            onChange={this.updateMessage.bind(this)}
          />
          <MyButton
            class="text-nowrap small-rounded-btn primary-btn-inverse pr-5"
            value="Add Address"
            onClick={this.handleClick.bind(this)}
          ></MyButton>
        </div>
      </div>
    );
  }
}
export default Branches;
