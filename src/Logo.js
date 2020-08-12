import React, { Component } from "react";
import LOGO from "./img/LOGO.png";


class Logo extends Component {
  render() {
    return (
      <div>
        <img src={LOGO} className="App-logo" alt="logo" />
 
      </div>
    );
  }
}

export default Logo;
