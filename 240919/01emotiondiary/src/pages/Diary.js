import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import { getFormattedDate } from "../util";

const Diary = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);
  const data = useDiary(id)
  // console.log(data)

  //예외조항 처리하면 useState() null 값 줘야함
  if(!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    const goBack = () => {
      navigate(-1)
    }
    const goEdit = () => {
      navigate(`/edit/${id}`)
    }
    
    const {date, emotionId, content} = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`
    return <div>
      <Header leftChild={<Button title={"<"} onClick={goBack}/>}  title={title} rightChild={<Button title={"수정"} onClick={goEdit}/>}/>
      <Viewer content={content} emotionId={emotionId} />
    </div>;
  }
};

export default Diary;
