import React, { useState, useMemo } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo = [], onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  //총개수 / 완료된할일 / 아직 완료 못한일
  const analyzeTodo = useMemo(() => {
    //컴포넌트가 마운트가 된 순간 최초 출력됨 + 근데 onChangeSearch검색 할 때마다 전혀 관련 없는 analyzeTodo가  출력됨 => 비효율적인 함수가 호출 => 컴포넌트가 아니기 때문에 hook사용 => 그럼 이렇게 일일이 다 확인해야하는건가?
    // console.log("analyzeTodo 함수 호출 ")
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  },[todo])

  const { totalCount, doneCount, notDoneCount } = analyzeTodo //이제 더이상 함수 아님 최적화 하면서 콜백으로 바뀜;
  return (
    <div className="TodoList">
      <h4>Todo List 🎈</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
            {...it}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
