import { useForm } from "react-hook-form";
import styled from "styled-components";
import { atom } from "recoil";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
  margin-top: 50px;
`;
const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

interface Form {
  toDo: string;
}

const toDoState = atom({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<Form>();

  const handleValid = () => {
    setValue("toDo", "");
  };
  return (
    <Container>
      <Title>ToDo List</Title>
      <Form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please Write a ToDo...", // 필수 필드 에러 메시지
          })}
          type="text"
          placeholder="Write a Todo..."
        />
        <input type="submit" value={"add"} />
      </Form>
      <ul>
        <li>리액트</li>
        <li>꿀잠자기</li>
      </ul>
    </Container>
  );
};

export default ToDoList;
