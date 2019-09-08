import React, { Component } from 'react'
import Message from '../Message'
import './History.scss'

class History extends Component {
  render() {
    const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />)

    return (
      <div className="History">
        <h2>Message Logs</h2>
        {messages}
      </div>
    )
  }
}

export default History
