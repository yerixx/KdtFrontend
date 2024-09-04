import styled from "styled-components";
import React, { useState, useRef } from "react";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: yellowgreen;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 15px;
  input {
    text-align: center;
    font-size: 14px;
    border: none;
    padding: 3px 20px;
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      background-color: #111;
      color: #fff;
    }
  }
  select {
    font-size: 14px;
    border: none;
    padding: 3px 70px;
    border-radius: 10px;
  }
`;

const Body5 = () => {
  const [text, setText] = useState("");

  //useRef의 반환 값을 받을 객체가 필요함
  const textRef = useRef();
  // console.log(textRef); current 값을 가지고 있음

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) textRef.current.focus();
    else {
      alert(text);
      textRef.current.value = "";
    }
  };

  return (
    <Wrapper>
      {/* input textRef의 제어를 받음  */}
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </Wrapper>
  );
};

export default Body5;
