import React, { Component } from "react";

export default class ContactItem extends Component {

    onDeleteContact=(e)=>{
        e.stopPropagation();
        this.props.onDeleteContact(this.props.contact.id)
    }
  render() {
      const {contact} = this.props;
    return (
      <>
        <tr>
          <td> {contact.newName}</td>
          <td>{contact.surname}</td>
          <td>{contact.phone}</td>
          <td>
            <button onClick={this.onDeleteContact}>Delete</button>
          </td>
        </tr>
      </>
    );
  }
}
