import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;

// 기억하기
// const Input = styled.input.attrs({ required: true })`

// `;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   /* background: ${(props) => props.bgColor}; */
//   background: ${({ bgColor }) => bgColor};
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   padding: 8px;
// `;

const rotationAni = keyframes`
from{
  transform:rotate(0deg);
  border-radius:0px;
}to{
  transform:rotate(360deg);
  border-radius:100px;

}`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAni} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    <Container>
      <Title>Hello world</Title>
      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}

      {/* <Btn>Log in</Btn>
      <Btn as="a" href="#">
        Log Out
      </Btn> */}

      {/* required= 필수값. 무조건 값이 들어와야하는 상태 */}
      {/* <Input required="true"></Input> */}

      {/* animation */}
      <Box>
        <Emoji>***</Emoji>
      </Box>
      <Emoji>...</Emoji>
    </Container>
  );
};

export default App;
