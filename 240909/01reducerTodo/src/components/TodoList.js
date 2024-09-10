import React, { useState, useMemo, useContext } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem.js";
import { TodoContext } from "../App.js";

const TodoList = () => {
  // todo 못찾아 오면 [] 빈 배열로 줘라.
  const {todo = []} = useContext(TodoContext);
  // 객체
  const [search, setsearch] = useState("");
  const onChangeSearch = (e) => {
    setsearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
  };

  //체크역할
  const analyzeTodo = useMemo(
    () => {
      const totalCount = todo.length;
      const doneCount = todo.filter((it)=> it.isDone).length
      const notDoneCount = totalCount - doneCount;
      return {
        totalCount,
        doneCount,
        notDoneCount,
      };
    },[todo]
  );

  const {totalCount,doneCount,notDoneCount} = analyzeTodo;
    // console.log(totalCount,doneCount,notDoneCount)

  return (
    <div className="TodoList">
      <h4>🎯Todo List</h4>
      <div>
        <div> 총 개수 : {totalCount} </div>
        <div> 완료한 일 : {doneCount} </div>
        <div> 완료하지 못한 일 : {notDoneCount} </div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchBar"
        placeholder="검색어를 입력하세요"
      ></input>    
      <div className="list_Wrapper">
        {/* {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))} */}
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it}/>
        ))}
      </div>
    </div>
  );
};

// //값이 없으면 일단 배열로 저장
// TodoList.defaultProps = {
//   todo:[],
// };

export default TodoList;
