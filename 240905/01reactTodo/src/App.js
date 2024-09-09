import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoEditer from "./components/TodoEditer";
import TodoList from "./components/TodoList";
import TestComp from "./components/TestComp";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Javascript 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  //이 문법 익숙해지기
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
  setTodo(
    todo.map((it) => 
      it.id === targetId ? {...it, isDone: !it.isDone}: it
  )
  )
}

const onDelete = (targetId) => {
  setTodo(todo.filter((it) => it.id !== targetId))
}

  return (
    <div className="App">
      <TestComp/>
      <Header />
      <TodoEditer onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
