import io from "socket.io-client";
import styled from "styled-components";
import { Chat } from "./components/Chat";

// const socket = io.connect("http://localhost:3001");

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackdropFilter = styled.div`
  background-color: #00000020;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Background>
      <BackdropFilter>
        <Chat />
      </BackdropFilter>
    </Background>
  );
}

export default App;
