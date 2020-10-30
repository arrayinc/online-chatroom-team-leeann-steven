const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3001;
const favicon = require("serve-favicon");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.static(path.join(__dirname, "build"))); 

app.use(favicon(path.join(__dirname, "public", "favicon.ico"))); 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: "Truly a secret" }));

app.use(cors()); 

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });
});

let userList = [];

io.on("connection", function (socket) {
  let currentUser = null;
  socket.on("user", function (msg) {
    currentUser = msg;
    userList.push(msg);
    io.emit("user list", userList) & console.log(userList);
  });
  socket.on("disconnect", () => {
    const index = userList.indexOf(currentUser);
    if (index > -1) {
      userList.splice(index, 1);
      console.log(userList);
      io.emit("user list", userList);
    }
  });
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
); 

http.listen(port, function () {
  console.log("listening on *:" + port);
});
