import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header"
import Button from "../component/Button"
import Editor from "../component/Editor";

const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext)
  // console.log(fnc)
  console.log(onCreate)

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const goHome = () => {
    navigate("/")
  }

  // 실행될 신규 일기 데이터 값
  const onSubmit = (data) => {
    const {date, content, emotionId} = data
    //=> onCreate로 전달 이거 순서 바뀌면 안됨
    onCreate(date, content, emotionId);
    navigate("/")
  };

  return <div>
    <Header leftChild={<Button onClick={goBack} title={"<"}/>} title={"새 일기 쓰기 "} rightChild={<Button onClick={goHome} title={"Home"}/>}/>
    <Editor onSubmit={onSubmit}/>
  </div>;
};

export default New;
