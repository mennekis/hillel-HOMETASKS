import React, { Component } from "react";
import "./App__content.css";

export default class App__navigation extends Component {
  render() {
    return (
      <nav className="App__navigation--left">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>Galary</li>
        </ul>
      </nav>
    );
  }
}
