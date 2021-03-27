import React, { Component } from "react";
import MyNavBar from "./MyNavBar";
class About extends Component {
  state = {};
  render() {
    return( 
      <div style={{ textAlign: "center" }}>
        <MyNavBar />
        <br />
        <br />
        <br />
        <br />
        <h1>Sara: (ᵔᴥᵔ)</h1>
        <h1>Dhia: (ノಠ益ಠ)ノ彡┻━┻</h1>
        <h1>Mahdi: ( ͡° ͜ʖ ͡°)</h1>
        <h1>Rafik: ¯\_(ツ)_/¯</h1>
      </div>
    );
  }
}
export default About;
