import React, { Component } from "react";
import logo from "./logo.svg";

export default class App__header extends Component {
  render() {
    return (
      <header className="App__header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}
