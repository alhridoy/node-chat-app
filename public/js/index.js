var socket = io();

socket.on('connect', function (){

    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to:'jon@example.com',
    //     text:'hey this is hridoy'
    // });

    //message emmit

   
});

socket.on('disconnect', function (){

    console.log('Disconnected from server')
})

// socket.on('newEmail', function (email){

//     console.log('New Email', email);
// });

//message from client

socket.on('newMessage', function(message){
    console.log('New Message', message);
})

//server to clinet

// socket.on('newMessage', function(newMessage){

//     console.log('New Message', newMessage);
// })