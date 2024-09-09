import React,{useReducer} from 'react'

// action = dispatch의 인자값인 객체
const reducer= (state, action) => {
 switch(action.type){
  case"INCREASE":
  return state + action.data
  case"DEXREASE":
  return state - action.data
  case"INIT":
  return 0;
  default:
    return state;
 }
}

const TestComp = () => {

 const [count,dispatch] = useReducer(reducer,0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispatch({type:"INCREASE", data:1})}>+</button>
        <button onClick={()=> dispatch({type:"INIT",data:0})}>Reset</button>
        <button onClick={() => dispatch({type:"DEXREASE", data:1})}>-</button>
      </div>
    </div>
  )
}

export default TestComp
