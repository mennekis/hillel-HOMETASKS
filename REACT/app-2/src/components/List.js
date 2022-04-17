import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <>
        {todos.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              changeStatus={this.props.changeStatus}
            />
          );
        })}
      </>
    );
  }
}
