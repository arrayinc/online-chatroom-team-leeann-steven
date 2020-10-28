var app = require("express")();
const express = require("express")();
// const app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3001;

//const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const { isObject } = require("util");

app.use(cookieParser());
app.use(bodyParser.json()); //LG added
app.use(session({ secret: "Truly a secret" }));
//app.use(express.bodyParser({extended: true})); //Matt used bodyParser here instead of express
app.use(cors()); //LG added

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// io.on("connection", (socket) => {
//   console.log("beep");
//   socket.on("disconnect", () => {
//     console.log("boop");
//   });
// });

http.listen(port, function () {
  console.log("listening on *:" + port);
});
