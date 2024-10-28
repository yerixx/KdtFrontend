import React, { useState } from "react";
import styled from "styled-components";

// 중요
const Container = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  background: ${({ bgColor }) => bgColor};
  border: 4px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

//text = "world" 기본값 설정
const Circle = ({ bgColor, borderColor, text = "world" }: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("JS");
  return (
    //borderColor ?? bgColor 단락회로평가 borderColor 없으면 bgColor줘라
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
      {counter}
    </Container>
  );
};

export default Circle;
