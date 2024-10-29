import React, { useState, useContext } from "react";
import styled from "styled-components";

import TextInput from "./TextInput";
import Button from "./Button";
import Title from "./Title";
import { ToDoListContext } from "../contexts/ToDoContext";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;
const Contents = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;
const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface Props {
  onClose: () => void;
}

const ToDoInput = ({ onClose }: Props) => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState("");

  const onAddTodo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setToDo("");
    onClose();
  };

  return (
    <Wrapper>
      <Background />
      <Contents>
        <Title label={"할 일 추가"} />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label={"추가"} color={"Black"} onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Wrapper>
  );
};

export default ToDoInput;
