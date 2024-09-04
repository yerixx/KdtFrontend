import styled from "styled-components";
import React, { useState } from "react";

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

//함수형 컨포넌트
const Viewer = ({ number }) => {
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
};
export default Viewer;
