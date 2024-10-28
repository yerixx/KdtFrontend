import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

interface Porps {
  show: boolean;
  onClick: () => void;
}

const ShowInputBtn = ({ show, onClick }: Porps) => {
  return (
    <Wrapper>
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? "#ff5722" : "black"}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default ShowInputBtn;
