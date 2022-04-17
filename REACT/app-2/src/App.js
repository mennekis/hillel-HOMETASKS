import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "task1",
          isDone: false,
        },
        {
          id: 2,
          title: "task2",
          isDone: false,
        },
        {
          id: 3,
          title: "task3",
          isDone: false,
        },
      ],
    };
  }

  addTodo = (title) => {
    if (title) {
      this.setState({
        todos: [
          ...this.state.todos,
          { id: new Date().getTime(), title, isDone: false },
        ],
      });
    }
  };
  changeStatus = (id) => {
    const changedList = this.state.todos.map((item) => {
      return item.id === id
        ? {
            ...item,
            isDone: !item.isDone,
          }
        : item;
    });
    this.setState({
      todos: changedList,
    });
  };
  render() {
    return (
      <div>
        <div className="list">
          <List todos={this.state.todos} changeStatus={this.changeStatus} />
        </div>

        <div>
          <Form addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}
