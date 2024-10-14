import React from "react";

// 2. 초기값 정의
let initialState = {
  count: 0,
  id: "",
  pw: "",
};

// state = initialState 반환하고자 하는 초기값 0 으로 세팅 , action객체 찾아옴
const Reducer = (state = initialState, action) => {
  //if ver

  // //값을 store로 보낼 준비가 되어있어야함.
  // if (action.type === "INCREMENT") {
  //   // {} 객체 안에 있으니, 전개 연산자 구문 사용 || 일단 값 가져오기, count : state 안에 있는 count 만 + 1
  //   // return 값 필수
  //   return { ...state, count: state.count + 1 };
  // }
  // // 최종 return 필수
  // return { ...state };

  //3. store로 값 보내기!!

  //switch ver
  switch (action.type) {
    case "INCREMENT":
      // ...state건들이지 않은 state는 그대로 가져와햐암!!
      //action.payload.num = 인자값 역할
      return { ...state, count: state.count + action.payload.num };
    case "DECREASE":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      // app에 정의한 payload.id 가져오기?
      return { ...state, id: action.payload.id, pw: action.payload.pw };
    default:
      return { ...state };
  }
};

export default Reducer;
