import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {

  //onUpdate, onDelete 에만 리렌더링 하면 됨 => app 에서 관리
console.log(`${id} TodoItem 업데이트`)

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
//이렇게만 하면 안됨 => useCallbak 써야함
// export default React.memo(TodoItem);
export default React.memo(TodoItem);
