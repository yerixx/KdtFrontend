import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
interface Props {
  toDoList: Array<string>;
  // 삭제할 값을 참조변수 todo로 가져옴
  onDelete?: (todo: string) => void;
}

const ToDoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((todo, index) => (
        <ToDoItem
          key={index}
          label={todo}
          // onDelete가 된다면 todo 값을 받아서 실행할것임.
          // 유니온 타입은 타입 가드 지정해줘야함
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default ToDoList;
