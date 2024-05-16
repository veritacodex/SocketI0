const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});