import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//사용자가 입력한 값
interface Form {
  toDo: string;
}

const CreateToDo = () => {
  // const value = useRecoilValue(toDoState);
  // console.log(value);
  // const modFn = useSetRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<Form>();
  //입력받은 값을 setToDos에 저장 후 toDos에 보냄
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const handleValid = ({ toDo }: Form) => {
    //반환 값이 []배열이니 callback함수로 불러옴
    //원래 있던 값인 oldToDos (= 빈배열 )를 참조변수로 가져옴 : 타입 정의 필요

    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  // console.log(toDos);
  return (
    <>
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
    </>
  );
};

export default CreateToDo;
