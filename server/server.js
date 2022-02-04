const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id + " connected!");

  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected!");
  });
});

http.listen(3001, function () {
  console.log("listening on port 3001");
});
