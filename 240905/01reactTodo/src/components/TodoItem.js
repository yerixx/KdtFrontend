import React from 'react'
import "./TodoItem.css";

function TodoItem() {
  return (
    <div className="TodoItem">
      <div className="checkBox_col">
        <input type="checkbox"></input>
      </div>
      <div className="title_col">리액트 공부하기</div>
      <div className="date_col">
        {new Date().toLocaleDateString()}
        </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem
