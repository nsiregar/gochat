import React, { Component } from 'react'
import './Input.scss'

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input onKeyDown={this.props.send} placeholder="type a message ..." />
      </div>
    )
  }
}

export default Input
