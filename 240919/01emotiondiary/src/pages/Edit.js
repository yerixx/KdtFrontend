import React, { useContext,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import useDiary from "../hooks/useDiary";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";


const Edit = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  // console.log(id)
  const data = useDiary(id)
  // console.log(data)

  useEffect(()=> {
    setPageTitle(`${id} Diary Edit`)
  },[])

const {onDelete, onUpdate } = useContext(DiaryDispatchContext)
// console.log(fnc)

  const goBack = () => {
    navigate(-1)
  }
  
  const onSubmit = (data) => {
    if(window.confirm("일기를 정말 수정할까요?")){
      const {date, content, emotionId} =data
      onUpdate(id,date,content, emotionId);
      navigate('/')
    }
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
            <Editor initData={data} onSubmit={onSubmit}/>
          </div>
  }

};

export default Edit;
