import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  // count는 뷰어에 , setCount는 컨트롤러에 보내면 좋겠다
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  //불리언 값을 넣으면 컨포넌트를 제어할 수 있음
  const didMountRef = useRef(false);
  //setCount 실행 타이밍 제어 함수
  //버튼을 누를 때마다 해당 값을 변화시켜주는 함수
  //그러려면 인자값에 어떤 값을 받아야함

  useEffect(() => {});
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  //1. 기본기능 count 가 변화가 되면 콜백함수를 실행시켜라.. 의존성 함수
  // useEffect(() => {
  //   console.log("업데이트 : ", count, text);
  // }, [count, text]);

  //2. 어떤 작업을 하던지 일단 실행됨
  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });

  //잘이해 안됨
  //스테이트 값이 변경 될때만..? 1번이랑 그럼 다른게 뭐지
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else console.log("컴포넌트 업데이트!");
  });

  //의존성 배열 빈주석
  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);
  //   return () => {
  //     console.log("클린업!");
  //     clearInterval(intervalID);
  //   };
  // });

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        {/* 출력할 공간에 값 전달 */}
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        {/* 출력할 공간에 값 전달 */}
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
