import React from 'react'
import "./TodoEditer.css";


function TodoEditer(text) {

  const clickBtn = (e) =>{
    console.log(e.target.value)
  }
  return (
    <div>
      <h3>새로운 Todo 작성하기</h3>
      <div className="editor_wrapper">
        <input placeholder="Todo를 입력해주세요"></input>
        <button onClick={clickBtn}>작성</button>
      </div>
    </div>
  )
}

export default TodoEditer
