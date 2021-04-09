import React, { Component } from "react";
import "./my-button.css";

class MyButton extends Component {
  render() {
    return (
      <button class={this.props.class} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default MyButton;
