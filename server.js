var app = require("express")();
const express = require("express")();

var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3001;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");


app.use(cookieParser());
app.use(bodyParser.json()); //LG added
app.use(session({ secret: "Truly a secret" }));

app.use(cors()); //LG added

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });
});

let userList = [];

io.on("connection", function (socket) {
  let currentUser = null
  socket.on("user", function (msg) {
    currentUser = msg
    userList.push(msg);
    io.emit("user list", userList) & console.log(userList);
    
  });
  socket.on("disconnect", () => {
    const index = userList.indexOf(currentUser);
    if (index > -1) {
        userList.splice(index, 1) 
        console.log(userList) 
        io.emit("user list", userList);
    }
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
