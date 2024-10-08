import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 550px;
  gap: 20px;
  border: 1px solid pink;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
  /* overflow-clip-margin: content-box; */
`;

const Result = styled.h2`
  font-size: 30px;
  font-weight: 800px;
  color: #fa899c;
`;

const Box = ({ title, item, result }) => {
  if (title === "robot" && result != "tie") {
    result = result === "win" ? "lose" : "Win";
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      {/* 단락회로평가 */}
      <Img src={item && item.img} alt={"title"} />
      <Result>{result}</Result>
    </Wrapper>
  );
};

export default Box;
