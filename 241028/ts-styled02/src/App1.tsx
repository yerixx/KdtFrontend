import React, { useState } from "react";
import styled, { Styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
ul,li{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

//form에서의 type 정의
const App1 = () => {
  const [value, setValue] = useState("");
  // input 들어오는 모든 값의 형태로 타입 정의 하겠다
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title>Hello world!</Title>
        <form>
          <input onChange={onChange} type="text" placeholder="username" />
        </form>
      </Container>
    </div>
  );
};

export default App1;
