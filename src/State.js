import React, { Component } from 'react'

export default class State extends Component {
color={
  firstcolor:"blue",
  secondcolor:"green"
}

  render() {
    return (
      <div>
        <h1>{this.color.firstcolor}</h1>
        <h1>{this.color.secondcolor}</h1>
      </div>
    );
  }
}
