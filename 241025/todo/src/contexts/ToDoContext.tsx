import { createContext } from "react";
//보내줄 값에 대한 타입 정의
interface Context {
  toDoList: string[];
  onAdd: (toDo: string) => void;
  onDelet: (toDo: string) => void;
}

//자식요소들에게 보내줄 값에 대한 정의 역할
const ToDoListContext = createContext(
  {
    toDoList: [],
    onAdd: (toDo: string): void => {},
    onDelet: (toDo: string): void => {},
  };
)
