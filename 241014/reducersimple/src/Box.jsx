import React from "react";
import { useSelector } from "react-redux";

//자식요소인 box도 개별적으로 state를 받아올 수 있음
const Box = () => {
  let count = useSelector((state) => state.count);
  return <div>This is Box{count}</div>;
};

export default Box;
