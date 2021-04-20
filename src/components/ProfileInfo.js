import React, { Component } from "react";
import "./profile-info.css";
import { Grid } from "@material-ui/core";

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p className="field-name">{this.props.fieldName}</p>
        <p className="field-value">{this.props.fieldValue}</p>
      </div>
    );
  }
}

export default ProfileInfo;
