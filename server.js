const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('cameras', (req,res)=> res.send('Hello, WebRTC!!'))

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join('cameras')
    socket.to('cameras').broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to('cameras').broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(8080)