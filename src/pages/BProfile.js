import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
import Branch from "../components/Branch";
import BranchBox from "../components/BranchBox";

class BProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      isOpen: false,
      setIsOpen: false,
      // simulate having branches:
      branches: [
        new Branch(
          "Hamra Street",
          "+3213213",
          "bank@audi.com",
          "334932434",
          "33.23213",
          "34.243232"
        ),
      ],
    };
  }

  renderRows() {
    let renderedBranches = [];
    for (let index = 0; index < this.state.branches.length; index++) {
      let branchBox = (
        <div>
          <BranchBox branch={this.state.branches[index]}></BranchBox>
          <br />
        </div>
      );
      renderedBranches.push(branchBox);
    }
    return renderedBranches;
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <BNavBar />
        <br />
        <h1>Branch Profile</h1>
        <br />
        {this.renderRows()}
        <br />
        <br />
        <br />
        <br />
        
      </div>
    );
  }
}
export default BProfile;