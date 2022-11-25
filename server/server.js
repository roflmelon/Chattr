const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const express = require("express");
const database = require("./database/connect");
const service = require("./models");
const app = express();
const server = http.createServer(app);
//socket.io installation
const io = socketio(server, { cors: { origin: "http://localhost:3000" } });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
database();
io.on("connection", (socket) => service(io, socket));

app.use("/api", require("./routes"));

app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
