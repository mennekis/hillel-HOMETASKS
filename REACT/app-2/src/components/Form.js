import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      newTitle: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      newTitle: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTitle);
    this.setState({
      newTitle: "",
    });
  };
  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.newTitle}
          onChange={this.changeHandler}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}
