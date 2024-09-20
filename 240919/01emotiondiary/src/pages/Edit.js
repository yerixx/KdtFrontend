import React, { useContext } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";
import { DiaryDispatchContext } from "../App";


const Edit = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  // console.log(id)
  const data = useDiary(id)
  // console.log(data)

const {onDelete} = useContext(DiaryDispatchContext)
// console.log(fnc)

  const goBack = () => {
    navigate(-1)
  }
  
  const onClickDelete = () => {
    if(window.confirm("일기를 정말 삭제할까요? 삭제한 일기는 복구되지 않습니다")){
      onDelete(id);
      navigate("/")
    }
  }

  if(!data){
    return  <div>일기를 불러오고 있습니다.</div>
  } else {  
    return <div>
      <Header leftChild={<Button title={"< 뒤로가기"} onClick={goBack}/>} title={"일기수정하기"} rightChild={<Button title={"삭제하기"} type={"negative"} onClick={onClickDelete}/>}/>
        </div>
  }

};

export default Edit;
