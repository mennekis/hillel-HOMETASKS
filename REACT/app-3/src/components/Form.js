import React, { Component } from "react";
import Button from "./Button";
import './Form.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      newName: "",
      surname: "",
      phone: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
      console.log(e);
    e.preventDefault();
    this.props.addContact(this.state.newName, this.state.surname, this.state.phone);
    this.setState({
      newName: "",
      surname: "",
      phone: "",
    });
  };
  render() {
    return (
      <form className={`form`} onSubmit={this.submitHandler} >
        <input
          type="text"
          name="newName"
          value={this.state.newName}
          onChange={this.changeHandler}
          placeholder="Имя"
        />
        <input
          type="text"
          name="surname"
          value={this.state.surname}
          onChange={this.changeHandler}
          placeholder="фамилия"
        />
        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.changeHandler}
          placeholder="+38067777777"
        />
        <Button
        title="Сохранить"
        type="submit"
        />
        
        <Button
        title="Отмена"
        type="reset"
        />
        
      </form>
    );
  }
}
