import React from "react";

const TodoEditer = () => {
  return (
    <div className="TodoEditer">
      <h4>✏️새로운 ToDo 작성하기✏️</h4>
      <div className="editor_wrapper">
        <input placeholder="새로운 ToDo.....,,,,ㅠㅠ" />
        <button>추가</button>
      </div>
    </div>
  );
};

export default TodoEditer;
