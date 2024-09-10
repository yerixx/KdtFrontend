import React from 'react'
import "./TodoList.css";
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <div>
      <h3>🎯Todo List</h3>
      <input className="searchBar" placeholder="검색어를 입력하세요"></input>
      <TodoItem/>
    </div>
  )
}

export default TodoList
