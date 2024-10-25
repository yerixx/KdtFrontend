import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

const mockData = [
  "typescript 복습하기",
  "React.js 공부하기",
  "Node.js 예습하기",
];

const App = () => {
  const [toDoList, setToDoList] = useState(mockData);
  const [toDo, setToDo] = useState("");

  const onAdd = () => {
    if (toDo === "") return;
    setToDoList([toDo, ...toDoList]);
    setToDo("");
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
      <Button label={"추가"} color={"Black"} onClick={onAdd} />
    </Container>
  );
};

export default App;
