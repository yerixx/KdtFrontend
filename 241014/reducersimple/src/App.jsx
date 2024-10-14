import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import store from "./store";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
const App = () => {
  const dispatch = useDispatch();
  //참조변수로 사용
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  //1번으로 정의 하고 reducer에서 초기값 정의
  const increase = () => {
    // 액션역할
    //payload 이 값을 기반으로 무엇을 해라 기본값 : 5
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE", payload: { num: 1 } });
  };

  const login = () => {
    //인자값은 꼭 객체여야함
    dispatch({ type: "LOGIN", payload: { id: "David", pw: "1234" } });
  };

  return (
    <Wrapper>
      <h1>{count}</h1>
      <ButtonGroup>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </ButtonGroup>
      <h1>
        {id},{pw}
      </h1>
      <button onClick={login}>로그인</button>
    </Wrapper>
  );
};

export default App;
