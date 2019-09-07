import React, { Component } from 'react'
import { connect, sendMessage } from './api'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    connect()
  }

  send() {
    console.log('hello')
    sendMessage('hello')
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default App
