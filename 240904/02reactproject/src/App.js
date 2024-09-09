
import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Controller from './components/Controller'
import Viewer from './components/Viewer';
import Even from './components/Even';

export const Wrapper = styled.div`
width:400px;
padding:20px;
background:#ddd;
margin-bottom :10px;
border-radius:10px;
`

function App() {
  const [count, setCount] = useState(0)
  const [text,setText] = useState("")

  const handleSetCount = (value) => {
    setCount(count + value)
  }

  const handleChangeText = (e) => {
    setCount(e.target.value)
  }



  return (
    <div>
      <h1>Simple Counter</h1>
      <Wrapper>
        <input value={text} onChange={handleChangeText}/>
      </Wrapper>
      <Wrapper>
        <Viewer value={text} count={count}/>
        {count % 2 === 0 && <Even/>}
      </Wrapper>
      <Wrapper>
        <Controller handleSetCount={handleSetCount}/>
      </Wrapper>
    </div>
  )
}

export default App
