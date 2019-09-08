import React, { Component } from 'react'
import { connect, sendMessage } from './api'
import Header from './components/Header'
import History from './components/History'
import Input from './components/Input'
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

  send(event) {
    if (event.keyCode === 13) {
      sendMessage(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <History chatHistory={this.state.chatHistory} />
        <Input send={this.send} />
      </div>
    )
  }
}

export default App
