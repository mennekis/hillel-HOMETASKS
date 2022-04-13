import React, { Component } from "react";
import "./App.css";
import App__content from "./App__content";
import App__navigation from "./App__navigation";
import App__header from "./App__header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <App__header />
        <div className="wrapper">
          <App__navigation />
          <App__content />
        </div>
      </div>
    );
  }
}
