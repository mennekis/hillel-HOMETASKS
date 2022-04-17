import React, { Component } from "react";
import "./App.css";

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
      newTitle: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      newTitle: e.target.value,
    });
  };
  clickHandler = (e) => {
    this.addTodo(this.state.newTitle);
  };
  addTodo(title) {
    if (title) {
      this.setState({
        todos: [
          ...this.state.todos,
          { id: new Date().getTime(), title, isDone: false },
        ],
        newTitle: "",
      });
    }
  }
  ChangeStatus(id) {
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
  }
  render() {
    return (
      <div>
        <div className="list">
          {this.state.todos.map((item) => {
            return (
              <div
                className={`item-list ${item.isDone ? "item-done" : ""}`}
                key={item.id}
                onClick={() => this.ChangeStatus(item.id)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="form">
          <input
            type="text"
            value={this.state.newTitle}
            onChange={this.changeHandler}
          />
          <button onClick={this.clickHandler}>Add Todo</button>
        </div>
      </div>
    );
  }
}
