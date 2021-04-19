import React, { Component } from "react";
import BNavBar from "../components/BNavBar";
import Box from "../components/Box";

class BQueues extends Component {
  state = {};
  render() {
    let txtList = ["Queue ID:", "Establishment's ID:", "Establishment's Name:", "Branch ID:", "Branch Name:"];
    let btnList = ["Postpone Turn", "Leave Line"];
    return (
      <div>
        <div>
          <BNavBar />
          <br />
          <Box txtList={txtList} btnList={btnList}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1>Branch's current queues</h1>
      </div>
    );
  }
}
export default BQueues;
