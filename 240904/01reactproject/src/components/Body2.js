import styled from "styled-components";

import React, { useState } from 'react'

export const Wrapper = styled.div`
  width: 400px;
  height:400px;
  background:yellowgreen;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  border-radius:20px;
    input{
        width:200px;
        text-align: center;
        border-radius:20px;
        border:none;
        &:focus{
        outline:none
        }
    }
    select{
        width:200px;
        border-radius:20px;
        border:none;
        text-align: center;
        &:focus{
          outline:none
        }
      }
   textarea{
        width:200px;
    }
`

function Body2() {


  const [value,setValue] = useState({
    name:"",
    gender:"",
    date:"",
    text:"",

  })

  const handleOnChange = (e) => {
    console.log("현재 수정 대상 : ", e.target.value);

    setValue({
...value,
[e.target.name]:e.target.value
    })

  }


  return (
    <Wrapper>
      <div>
       <input name="name" type="text" placeholder="이름" value={value.name} onChange={handleOnChange}></input>
      </div>
      <select name="gender" value={value.gender} onChange={handleOnChange}>
        <option key={"women"} >여성</option>
        <option key={"man"} >남성</option>
      </select>
      <div>
       <input name="date" type="date" value={value.date} onChange={handleOnChange} ></input>
      </div>
      <div>
       <textarea name="text" value={value.text} onChange={handleOnChange}></textarea>
      </div>
      
    </Wrapper>
  )
}

export default Body2
