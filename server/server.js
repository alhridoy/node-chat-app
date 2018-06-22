const path = require('path');
//for socket
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
//crearing server using hhttp 
var server = http.createServer(app)

//server socket
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket)=>{

  console.log('New User connected');

  //server emitting to client with data
  socket.emit('newEmail', {
    from:'aliqramalaheehridoy@gmail.com',
    text:'Hey. whats is going on',
    creatAt:123
  });

  //server emitting message

  socket.emit('newMessage',{

    from:'john',
    text:'How are you',
    createdAt:123123
  })


  //from client to server

  socket.on('createEmail', (newEmail)=>{
     console.log('createEmail', newEmail);
  });
  socket.on('disconnect', ()=>{
    console.log('User was disconnected');
  })

  //new message event: S_C

  // socket.on('newMessage', (newMessage)=>{

  //   console.log('New Message', newMessage)
  // })

  //from c-s
  socket.on('createMessage', (message)=>{
    console.log('message', message);
 });

}) //register an event listener
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
