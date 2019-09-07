import React, { Component } from 'react'
import { connect, sendMessage } from './api'
import Header from './components/Header'
import History from './components/History'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log('new message')

      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))

      console.log(this.state)
    })
  }

  send() {
    console.log('hello')
    sendMessage('hello')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <History chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default App
