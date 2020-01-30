const socket = io()

socket.on('usersonline',(data)=>{
    $('#online').text(data)
})

$('#btnSend').click(()=>{
    var username = $('#username').val()
    var message = $('#message').val()

    var data ={
        username,
        message
    } 
    //envia al servidor el mensaje
    socket.emit('message',data)
})

//recibe el mensaje del servidor
socket.on('sendsmessages',(message)=>{
    console.log('messages',message)
    $('#messages').append($('<li>').text(`${message.username}: ${message.message}`))
})