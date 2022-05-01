import React, { Component } from 'react'
import "./Button.css"
export default class Button extends Component {
 
  render() {
    return (
      <button type={this.props.type} onClick={()=>{console.log(this.props.title,this.props.type)}}>{this.props.title}</button>
    )
  }
}
