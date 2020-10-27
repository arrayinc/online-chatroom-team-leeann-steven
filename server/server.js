
// var app = require('express')();
const express = require('express');
const app = express();
const PORT = 3001;
//const PORT = process.env.PORT || 3001; --> eventually use this instead of PORT = 3001;

//LG added http, io, router, path, bodyParser, cors consts
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const router = express.Router();
const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const { isObject } = require('util');

// app.use(cookieParser());
// app.use(bodyParser.json()); //LG added
//app.use(session({ secret: 'Truly a secret'}));
// app.use(express.urlencoded({extended: true})); //Matt used bodyParser here instead of express
// app.use(cors()); //LG added

// app.post('/', (req, res) => {   
// console.log("receiving")
//     res.end();
// });

app.get('/', (req, res) => {
     res.send('hi'); //LG testing here to load a page in route
    //res.sendFile(path.join(__dirname, "src", "/index.js"));
    //res.sendFile( path.resolve('public/index.html') );
});
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg) & console.log("message sent");
    });
  });
//LG added io.on from Getting Started project
io.on('connection', (socket) => {
    console.log ('beep');
    socket.on('disconnect', () => {
      console.log('boop');
    });
});
    
// app.get('/expresstest', (req,res) => {
//     var message = "express and react are talking to each other";
//     res.json(message);
//     console.log('Sent message');
// });

app.listen(PORT, () => {
    console.log(`Server is listening... ${PORT}`);
});