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

const Gamebox = styled.div`
  width: 75vw;
  height: 600px;
  background-color: #ffffff50;
  border-radius: 5px;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 15px 0 grey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(2em)" : "none")};
  transition: transform 0.1s ease-in-out;
`;

const UsersIcon = styled(FiUsers)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2.5rem;
  margin: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Tasks = styled.div`
  width: 85%;
  height: 10%;
  background-color: #ffffff81;
  border-radius: 5px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
  margin: 10px;
`;

const Task = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 17%;
`;

const EntriesContainer = styled.div`
  margin-top: 3px;
  width: 85%;
  height: 85%;
  background-color: #ffffff81;
  border-radius: 5px;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EntryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 12%;
  margin: 10px;
`;

const Entry = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 17%;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
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
      <Gamebox show={showUsers}>
        <UsersIcon onClick={() => setShowUsers(!showUsers)} />
        <Tasks>
          <TaskRow>
            <Task>Stadt</Task>
            <Task>Land</Task>
            <Task>Fluss</Task>
            <Task>Essen</Task>
            <Task>Marke</Task>
          </TaskRow>
        </Tasks>
        <EntriesContainer>
          <EntryRow>
            <Entry>Hi</Entry>
            <Entry>Hi</Entry>
            <Entry>Hi</Entry>
            <Entry>Hi</Entry>
            <Entry>Hi</Entry>
          </EntryRow>
          <EntryRow></EntryRow>
        </EntriesContainer>
      </Gamebox>
    </Container>
  );
};
