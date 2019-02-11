

//app setup
const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
//we are going to run 
const socketIO  = require('socket.io')(server);


//const vars
const LISTEN_PORT = 8080;

//middleware
app.use(express.static(__dirname + '/public'));

//set routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/mobile.html');
});

socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });
});

//start server
server.listen(LISTEN_PORT);
console.log('Listening on port: ' + LISTEN_PORT );