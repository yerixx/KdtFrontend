import styled from "styled-components";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { ToDo, toDoState } from "../atoms";

const Wrapper = styled.div`
  background: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 10px;
`;

// area props로 지정함
interface AreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<AreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.isDraggingFromThis
      ? "crimson"
      : "dodgerblue"};
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
`;

const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
`;

interface BoardProps {
  toDos: ToDo[];
  boardId: string;
}

interface FormProps {
  toDo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormProps>();
  const onVaild = ({ toDo }: FormProps) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });
    // console.log(form);
    // console.log(data);
    setValue("toDo", "");
  };

  // const inputRef = useRef<HTMLInputElement>(null);
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000);
  // };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      {/* <input ref={inputRef} type="text" placeholder="please..." />
      <button onClick={onClick}>add</button> */}
      <Form onSubmit={handleSubmit(onVaild)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`add ${boardId}`}
        ></Input>
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
          >
            <div ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <DraggableCard
                  key={toDo.id}
                  toDoId={toDo.id}
                  toDoText={toDo.text}
                  index={index}
                />
              ))}
              {magic.placeholder}
            </div>
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
