import React, {
  useReducer,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const Wrapper = styled.div`
  padding: 20px;
  /* background:var(--primary-color); */
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    // 신규 값 생성
    case "CREATE": {
      // 기존 일기와 새로운 일기 배열로 반환
      const newState = [action.data, ...state];
      localStorage.setItem("diary",JSON.stringify(newState))
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      localStorage.setItem("diary",JSON.stringify(newState))
      return newState;
    }
    case "DELETE": {
      const newState = state.filter((it) => String(it.id) !== String(action.targetId)
    );
      localStorage.setItem("diary",JSON.stringify(newState))
      return newState;
    }
    default: {
      return state;
    }
  }
};

// const mockData = [
//   {
//     id: "mock1",
//     date: new Date().getTime() - 1,
//     content: "mock1_Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatibus excepturi rerum cumque consequuntur exercitationem alias unde, consectetur soluta sed, nihil neque quisquam accusamus, odit assumenda numquam quis. Neque, officiis.",
//     emotionId: 1,
//   },
//   {
//     id: "mock2",
//     date: new Date().getTime() - 2,
//     content: "mock2",
//     emotionId: 2,
//   },
//   {
//     id: "mock3",
//     date: new Date().getTime() - 3,
//     content: "mock3",
//     emotionId: 3,
//   },
// ];



// state만 따로 모아서 간다. 성격()
export const DiaryStateContext = React.createContext();

// 함수만 따로 모아서 가도록 한다. 성격()
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const rawData = localStorage.getItem("diary")
    if(!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData)
    if(localData.length === 0){
      setIsDataLoaded(true);
      return;
    }
    localData.sort((a,b)=> Number(b.id) - Number(a.id))
    idRef.current = localData[0].id + 1;
    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content: content,
        // 축약가능
        emotionId: emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content: content,
        emotionId: emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다!</div>;
  } else {
    return (
    <>
      <GlobalStyles/>
        <div className="App">
          {/* EMOTION */}
          {/* <img src={emotion1}></img>
          <img src="/emotion/emotion1.png"></img>
          <img src={"/emotion/emotion1.png"}></img> */}
          {/* <img src={`${process.env.PUBLIC_URL}/emotion/emotion1.png`}></img> */}
  
          {/* 이게 뭐지?? */}
          <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider
              value={{ onCreate, onUpdate, onDelete }}
            >
              <Wrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/new" element={<New />} />
                  <Route path="/diary/:id" element={<Diary />} />
                  {/* 동적 아이디 생성으로 인한 /diary/ 없음*/}
                  {/* <Route path="/diary/" element={<Diary />} /> */}
                  <Route path="/edit/:id" element={<Edit />} />
                </Routes>
                {/* <div>
              <Link to={"/"}>HOME</Link>
              <br></br>
              <Link to={"/new"}>NEW</Link>
              <br></br>
              <Link to={"/diary"}>DIARY</Link>
              <br></br>
              <Link to={"/edit"}>EDIT</Link>
            </div> */}
              </Wrapper>
            </DiaryDispatchContext.Provider>
          </DiaryStateContext.Provider>
        </div>
    </>
    );
  }
};

export default App;
