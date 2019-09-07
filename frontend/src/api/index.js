var socket = new WebSocket('ws://localhost:8080/ws')

let connect = cb => {
  console.log('connecting')

  socket.onopen = () => {
    console.log('connected')
  }

  socket.onmessage = msg => {
    console.log(msg)
    cb(msg)
  }

  socket.onclose = event => {
    console.log('closed connection', event)
  }

  socket.onerror = error => {
    console.log('connection error', error)
  }
}

let sendMessage = msg => {
  console.log("sending: ", msg)
  socket.send(msg)
}

export { connect, sendMessage }
