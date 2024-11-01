//Create Form 역할
import CreateToDo from "./CreateToDo";
//  업데이트 된 값
import { categoryState, toDoSelector, Categories } from "../atoms";
//state 값을 찾아오는 역할
import { useRecoilState, useRecoilValue } from "recoil";

import styled from "styled-components";
import ToDo from "./ToDo";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
  margin-top: 80px;
`;
const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const ToDoList = () => {
  // 중첩배열 각각 가져오기
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
    console.log(category);
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <select
        style={{
          width: "145px",
          height: "30px",
          textAlign: "center",
          border: "1px solid #000",
          borderRadius: "8px",
        }}
        value={category}
        onInput={onInput}
      >
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((todoItem) => (
        <ToDo key={todoItem.id} {...todoItem} />
      ))}
    </Container>
  );
};

export default ToDoList;
