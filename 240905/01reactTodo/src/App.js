import "./App.css";
import React, { useState, useRef } from "react";
import Header from "./components/Header";
import TodoEditer from "./components/TodoEditer";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const idRef = useRef(1);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo(newItem);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditer onCreate={onCreate} />
      <TodoList />
    </div>
  );
}

export default App;
