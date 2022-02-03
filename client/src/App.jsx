import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const joinRoom = () => {
    socket.emit("join_room", "lmao");
  };

  const leaveRoom = () => {
    socket.emit("send");
  };

  socket.on("test", (data) => {
    console.log(data);
  });

  return (
    <>
      Hello World
      <button
        onClick={() => {
          joinRoom();
        }}
      >
        JOIN
      </button>
      <button
        onClick={() => {
          leaveRoom();
        }}
      >
        LAVE
      </button>
    </>
  );
}

export default App;
