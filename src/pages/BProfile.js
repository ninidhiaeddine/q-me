import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
import Branch from "../components/Branch";
import BranchBox from "../components/BranchBox";
import ls from "local-storage";

class BProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      branch: {},
    };
  }

  // Helper function:

  pullBranchInfo() {
    const branchId = ls.get("branchId");
    this.sendGetBranchRequest(branchId);
  }

  // HTTP Request:

  sendGetBranchRequest(branchId) {
    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const endpoint =
      REACT_APP_BACKEND_URL + "/establishments/" + 0 + "/branches/" + branchId;

    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 200) {
          let branch = json.message;
          this.setState({ branch: branch });
        }
      });
  }

  // component related functions:

  componentDidMount() {
    this.pullBranchInfo();
  }

  // renderers:

  renderBranch() {
    return (
      <div>
        <BranchBox branch={this.state.branch}></BranchBox>
        <br />
      </div>
    );
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <BNavBar handleBranchLogout={this.props.handleBranchLogout} />
        <br />
        <h1>Branch Profile</h1>
        <br />
        {this.renderBranch()}
      </div>
    );
  }
}
export default BProfile;
