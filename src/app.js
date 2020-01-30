const express = require('express')
const path = require('path')
const app = express()


app.set('port',process.env.PORT || 1337)

//app.use(require('./router/appserver'))
//app.use(express.static(path.join(__dirname, '../public')))

const server = app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'))
})

require('./websocket/socket')(server)

module.exports = app;