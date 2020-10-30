//var app = require("express")();
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
const { isObject } = require("util");

app.use(express.static(path.join(__dirname, "build"))); //added

app.use(favicon(path.join(__dirname, "public", "favicon.ico"))); //added
app.use(cookieParser());
app.use(bodyParser.json()); //LG added
app.use(session({ secret: "Truly a secret" }));
//app.use(express.bodyParser({extended: true})); //Matt used bodyParser here instead of express
app.use(cors()); //LG added

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
); //added

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
); //added

http.listen(port, function () {
  console.log("listening on *:" + port);
});
