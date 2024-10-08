import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin:0px;
    padding: 0;
    box-sizing: border-box;
  }
  ul,li{
    list-style:none
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #ff748b;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://blog.kakaocdn.net/dn/zqXCb/btqWQ9G4bWj/Y3yLXyhXlcOYKan2N7eBI1/img.png",
  },
  scissors: {
    name: "scissors",
    img: "https://e7.pngegg.com/pngimages/846/1013/png-clipart-scissorhands-kitty-cat-hello-kitty.png",
  },
  paper: {
    name: "paper",
    img: "https://www.pngarts.com/files/11/Cartoon-Hello-Kitty-PNG-Free-Download.png",
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [robotSelect, setRobotSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let RobotChoice = randomChoice();
    setRobotSelect(RobotChoice);
    setResult(judgeMent(choice[userChoice], RobotChoice));
  };

  const randomChoice = () => {
    // Object안에 keys만 모아서 배열로
    let itemArray = Object.keys(choice);
    // console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgeMent = (user, robot) => {
    // console.log(user, robot);
    if (user.name === robot.name) {
      return "tie";
    } else if (user.name === "rock") {
      return robot.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return robot.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return robot.name === "rock" ? "win" : "lose";
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"you"} item={userSelect} result={result} />
          <Box title={"robot"} item={robotSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default App;
