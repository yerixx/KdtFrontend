import "./App.css";
import React, { useReducer, useRef, useCallback } from "react";
import Header from "./components/Header";
import TodoEditer from "./components/TodoEditer";
import TodoList from "./components/TodoList";

export const TodoContext = React.createContext();
console.log(TodoContext);

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

const reducer = (state, action) => {
  //switch(action객체 안에 type이 존재 한다면)
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      //전개연산자 내용 이해하기
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {/* value 보낼 값에 대한 정의 필요. 복수의 값이라 객체의 형태로. */}
      <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
        <TodoEditer />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
