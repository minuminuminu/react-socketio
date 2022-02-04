import styled from "styled-components";
import { useState } from "react";
import { FiUsers } from "react-icons/fi";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UsersSidebar = styled.div`
  position: absolute;
  left: 3vw;
  width: 10vw;
  height: 600px;
  background-color: #ffffff50;
  border-radius: 5px;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 15px 0 grey;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.1s ease-in-out;
`;

const UsersHeader = styled.p`
  font-size: 30px;
  margin: 15px;
  font-weight: 500;
`;

const Users = styled.p`
  font-size: 25px;
  margin: 5px;
`;

const Chatbox = styled.div`
  width: 75vw;
  height: 600px;
  background-color: #ffffff50;
  border-radius: 5px;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 15px 0 grey;
  transform: ${(props) => (props.show ? "translateX(2em)" : "none")};
  transition: transform 0.1s ease-in-out;
`;

const UsersIcon = styled(FiUsers)`
  position: absolute;
  font-size: 2.5rem;
  margin: 15px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Chat = () => {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <Container>
      <UsersSidebar show={showUsers}>
        <UsersHeader>Users</UsersHeader>
        <Users>Bob</Users>
        <Users>Luigi</Users>
        <Users>Mario</Users>
      </UsersSidebar>
      <Chatbox show={showUsers}>
        <UsersIcon onClick={() => setShowUsers(!showUsers)} />
      </Chatbox>
    </Container>
  );
};
