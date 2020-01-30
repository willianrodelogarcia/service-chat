const socketIO = require('socket.io')

module.exports = (server) =>{
    
    const io = socketIO(server)

    let onlineUsers = 0
    io.on('connection',(socket)=>{
        console.log('new Connection',socket.id)
        onlineUsers++
        console.log('Users',onlineUsers)
 
        socket.emit('usersonline',onlineUsers)

        //recibe el mensaje del cliente
        socket.on('message',(msg)=>{
            console.log(msg)
            //envia el mensaje a todos los clientes
            io.emit('sendsmessages',msg)
        })

        socket.on('disconnect',()=>{
            onlineUsers-- 
            console.log('user Disconnect')
            console.log('Users',onlineUsers)
        })
    })
}