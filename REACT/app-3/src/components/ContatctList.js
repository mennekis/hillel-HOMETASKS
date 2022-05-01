import React, { Component } from "react";
import ContactItem from "./ContactItem";

export default class ContatctList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Имя</td>
              <td>Фамилия</td>
              <td>Телефон</td>
              <td>Управление контактом</td>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return <ContactItem key={contact.id} contact={contact} onDeleteContact={this.props.onDeleteContact}/>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
