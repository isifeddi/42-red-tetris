const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const helpers = require("./helpers");
class Server {
  constructor() {
    let Players = [];
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        origin: "*",
        credentials: true,
      })
    );
    this.http = http.Server(this.app);
    var io = require("socket.io")(this.http, {
      pingInterval: 60000,
      cors: {
        origin: "*",
      },
    });
    io.on("connection", function (socket) {
      socket.on("new_tetriminos", (room) => {
        let rst = helpers.randomTetromino();
        io.sockets.in(room).emit("new_tetriminos", rst);
      });

      socket.on("new score", (rs) => {
        let tmp = [];
        for (let i = 0; i < Players.length; i++) {
          if (Players[i].user == rs.user) Players[i].score = rs.score;
          tmp.push({ user: Players[i].user, score: Players[i].score });
        }
        io.sockets.in(rs.room).emit("new score", tmp);
        socket.in(rs.room).emit("add row", tmp);
      });
      socket.on("start game", (room) => {
        let rst = helpers.randomTetromino();

        io.sockets.in(room).emit("start game", rst);
      });
      socket.on("Loser", (data) => {
        let c = 1;
        let winner = [];

        for (let i = 0; i < Players.length; i++) {
          if (Players[i].hasLost === true) c++;
          else winner = Players[i];
          if (Players[i].user === data.user) Players[i].hasLost = true;
        }
        if (c === Players.length - 1) {
          io.sockets.in(data.room).emit("Winner", winner);
        }
      });
      socket.on("joinRoom", (data) => {
        if (
          helpers.validateName(data.user) &&
          helpers.validateName(data.room)
        ) {
          if (io.sockets.adapter.rooms.get(data.room)) {
            const clients = io.sockets.adapter.rooms.get(data.room);
            const numClients = clients ? clients.size : 0;

            if (numClients + 1 > 5) {
              const message = { type: "error", message: "Room is full!" };
              socket.emit("TOASTIFY", message);
              return;
            } else {
              let a = Players.find(
                (element) =>
                  element.user === data.user && element.room === data.room
              );
              if (!a || a.user !== data.user) {
                Players.push({
                  admin: false,
                  socketId: "",
                  user: data.user,
                  hasLost: false,
                  room: data.room,
                  score: 0,
                });
              }
              socket.join(data.room);
              const message = { type: "success", message: "Joined room!" };
              socket.emit("Join_success", data);
              socket.emit("TOASTIFY", message);
            }
          } else {
            socket.join(data.room);
            let a = Players.find(
              (element) =>
                element.user === data.user && element.room === data.room
            );
            if (!a || a.user !== data.user) {
              Players.push({
                admin: false,
                socketId: "",
                user: data.user,
                hasLost: false,
                room: data.room,
                score: 0,
              });
            }

            const message = { type: "success", message: "Created room!" };
            socket.emit("Join_success", { ...data, is_admin: true });
            socket.emit("TOASTIFY", message);
          }
          io.sockets.in(data.room).emit("new member", Players);
        }
      });
    }).on("disconnect", function (socket) {
      socket.emit("disconnect", { message: "Server Down!!" });
    });
    this.app.get("/getRooms", (req, res) => {
      // let tmp = [];
      // for (let i = 0; i < rooms.length; i++) {
      //   let j = 0;
      //   let c = 0;
      //   while (j < rooms.length) {
      //     if (rooms[i].room == rooms[j].room) c++;
      //     j++;
      //   }
      //   tmp.push({ room: rooms[i].room, members: c });
      // }
    });
  }
  listen() {
    this.http.listen(4242, () => {
      console.log(`Listening ...`);
    });
  }
}
const server = new Server();
server.listen();
