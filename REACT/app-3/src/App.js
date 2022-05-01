import React, { Component } from "react";
import ContatctList from "./components/ContatctList";
import Form from "./components/Form";
import "./App.css";
import Button from "./components/Button";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          newName: "Ivan",
          surname: "Ivanov",
          phone: "+3800000000",
        },
        {
          id: 2,
          newName: "Mykola",
          surname: "Konotopsky",
          phone: "+3900000000",
        },
      ],
    };
  }
  addContact = (newName, surname, phone) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: new Date().getTime(), newName, surname, phone },
      ],
    });
  };
  onDeleteContact = (id) => {
    const updatedContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: updatedContacts,
    });
  };

  btnAddUser=()=>{
    // document.querySelector('.form').classList.toggle("open");
    // document.querySelector('.form').setAttribute("data-mode", "add");
    console.log("add user");
  };

  
  // btnCloseForm.addEventListener("click", function () {
  //   form.classList.toggle("open");
  // });
  render() {
    return (
      <div className="list">
       
        <ContatctList
          contacts={this.state.contacts}
          onDeleteContact={this.onDeleteContact}
        />
        <Button
          title="Add contact"
          onClick={this.btnAddUser}
        />
         <Form addContact={this.addContact} />
      </div>
    );
  }
}
