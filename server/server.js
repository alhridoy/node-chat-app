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

  socket.emit('newMessage', {
    from: 'Admin',
    text:'Welcome to the chat App'
  })

  //socketbroadcast.emit from admin text new user joined

  socket.broadcast.emit('newMessage', {

    from:'Admin',
    text : 'New User joined',
    createdAt: new Date().getTime()

  })

  //server emitting to client with data
  // socket.emit('newEmail', {
  //   from:'aliqramalaheehridoy@gmail.com',
  //   text:'Hey. whats is going on',
  //   creatAt:123
  // });

  //server emitting message



  //from client to server

  // socket.on('createEmail', (newEmail)=>{
  //    console.log('createEmail', newEmail);
  // });
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

    io.emit('newMessage',{
      from:message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });// emits every single connection

    //  socket.broadcast.emit('newMessage',{

    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()


    //  })
    //sadjofh
 });

}) //register an event listener
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
