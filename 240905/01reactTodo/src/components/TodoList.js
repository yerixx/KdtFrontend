import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem.js";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setsearch] = useState("");
  const onChangeSearch = (e) => {
    setsearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div className="TodoList">
      <h4>🎯Todo List</h4>
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
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
